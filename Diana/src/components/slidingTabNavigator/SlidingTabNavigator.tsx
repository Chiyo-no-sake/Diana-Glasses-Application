import React, {createRef} from 'react';
import {
	Dimensions,
	ScrollView,
	StyleProp,
	StyleSheet,
	TextStyle,
	View,
	ViewStyle,
} from 'react-native';

import withGradient from './withGradient';
import TabBar from './SlidingTabBar';

export type State = {
	highlightedIndex: number;
};

export type Props = {
	children?:
		| React.ReactElement<ScreenProps>
		| React.ReactElement<ScreenProps>[];
	initialRouteName?: string;
	scrollable?: boolean;
	tabStyle?: StyleProp<ViewStyle>;
	withGradient?: boolean;
	gradient?: string[];
};

export type ScreenProps = {
	name: string;
	renderIcon: JSX.Element;
	iconContainerStyle?: StyleProp<ViewStyle>;
	iconStyle?: StyleProp<any>;
	renderHighlighted?: JSX.Element;
	iconHighlightedStyle?: StyleProp<any>;
	label?: string;
	labelStyle?: StyleProp<TextStyle>;
};

/**
 * Screen to use into the navigator.
 * Props are:
 *  name
 *  renderIcon = the element to be displayed or the icon in the bar
 *  renderHighlighted = the element to render when the button is highlighted
 *  styleHighlighted = the style to apply when the button is highlighted !
 * OVERRIDDEN BY renderHighlighted
 *
 */
export class Screen extends React.Component<ScreenProps> {
	static defaultProps: Partial<Props> = {
		gradient: ['#FFF', '#aaa'],
	};

	constructor(props: ScreenProps) {
		super(props);
	}

	render() {
		return (
			<View style={[styles.screen,
				{width: Dimensions.get('window').width}]}>
				{this.props.children}
			</View>
		);
	}
}

export default class SlidingTabNavigator extends React.Component<Props, State> {
	static defaultProps = {
		scrollable: false,
		withGradient: false,
	};
	scrollView = createRef<ScrollView>();
	screenMap: { name: string; index: number }[] = [];
	suspendHighligh = false;
	suspendTimeout = 300;
	Tab = this.props.withGradient
		? withGradient(TabBar, {
			colors: this.props.gradient || [],
			style: styles.tab,
			start: {x: -0.5, y: -0.5},
			end: {x: 1.3, y: 1.3},
		})
		: TabBar;

	constructor(props: Props) {
		super(props);

		this.state = {highlightedIndex: 0};

		// set screen name-index map
		this.initNameIndexMap(props);
	}

	suspendHighlight() {
		this.suspendHighligh = true;
	}

	resumeHighlight() {
		this.suspendHighligh = false;
	}

	initNameIndexMap(props: Props) {
		if (this.props.children) {
			if (Array.isArray(props.children)) {
				for (let i = 0; i < props.children.length; i++) {
					if (props.children[i])
						this.screenMap.push({
							name: props.children[i].props.name,
							index: i,
						});
				}
			} else {
				this.screenMap.push({
					name: ((props.children as unknown) as React.Component<ScreenProps>)
						.props.name,
					index: 0,
				});
			}
		}
	}

	componentDidMount() {
		// set the initial route name right after component is mounted
		let initialRouteName;
		if (Array.isArray(this.props.children)) {
			if (this.props.children[0])
				initialRouteName = this.props.initialRouteName
					?
					this.props.initialRouteName
					:
					(this.props.children[0] as React.Component<ScreenProps>).props.name;
		} else if (this.props.children) {
			initialRouteName =
				((this.props.children as unknown) as React.Component<ScreenProps>).props.name;
		}

		if (initialRouteName) this.setCurrentScreen(initialRouteName);
	}

	getNearestRouteIndexOnScroll(x: number): string {
		if (Array.isArray(this.props.children)) {
			let nearestName = '';
			if (this.props.children[0]) {
				let nearestDist = this.getDistance(
					x,
					this.getIndex(
						(this.props.children[0] as React.Component<ScreenProps>).props.name
					)
				);

				this.props.children.forEach((child: any) => {
					const dist = this.getDistance(
						x,
						this.getIndex(child.props.name) *
						Dimensions.get('window').width
					);
					if (dist < nearestDist) {
						nearestName = child.props.name;
						nearestDist = dist;
					}
				});
			}
			return nearestName;
		} else {
			return '';
		}
	}

	getDistance(x1: number, x2: number) {
		return Math.abs(x2 - x1);
	}

	getIndex(name: string): number {
		const res = this.screenMap.find((s) => s.name === name);
		if (res != null) return res.index;
		return 0;
	}

	setCurrentScreen(name: string) {
		const index = this.getIndex(name);
		if (index != null) {
			const toScroll = index * Dimensions.get('window').width;
			this.scrollView.current?.scrollTo({
				animated: false,
				x: toScroll,
			});
			this.setState({...this.state, highlightedIndex: index});
		}
	}

	navigate(name: string) {
		const index = this.getIndex(name);
		if (index != null) {
			const toScroll = index * Dimensions.get('window').width;
			this.scrollView.current?.scrollTo({
				animated: true,
				x: toScroll,
			});
			this.setState({highlightedIndex: index});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.screenZone}>
					<ScrollView
						horizontal
						style={{height: "100%"}}
						bounces={false}
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
						pagingEnabled={true}
						ref={this.scrollView}
						scrollEnabled={this.props.scrollable}
						scrollEventThrottle={100}
						onScroll={(event) => {
							if (!this.suspendHighligh) {
								const nearestName = this.getNearestRouteIndexOnScroll(
									event.nativeEvent.contentOffset.x
								);
								const nearestIndex = this.getIndex(nearestName);
								this.setState({
									...this.state,
									highlightedIndex: nearestIndex,
								});
							}
						}}
					>
						{this.props.children}
					</ScrollView>
				</View>
				<this.Tab
					onPressIcon={(screenName) => {
						this.suspendHighlight();
						this.navigate(screenName);
						setTimeout(() => this.resumeHighlight(),
							this.suspendTimeout);
					}}
					isHighlightedConstraint={(screenName) =>
						this.state.highlightedIndex ===
						this.getIndex(screenName)
					}
					screens={this.props.children as any}
					style={[styles.tab, this.props.tabStyle]}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	screenZone: {
		flex: 1,
		flexDirection: 'column',
	},
	tab: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	screen: {
		flex: 1,
	},
	iconContainerStyle: {
		flex: 1,
		alignItems: 'stretch',
	},
});
