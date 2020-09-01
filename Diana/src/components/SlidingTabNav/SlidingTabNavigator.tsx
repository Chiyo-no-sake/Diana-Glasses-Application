import React, {
  Children,
  ReactChild,
  Ref,
  createRef,
  ReactComponentElement,
  ReactElement,
} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import SlidingTabIcon from './SlidingTabIcon';

export type State = {
  highlightedIndex: number;
};

export type Props = {
  children?: React.ReactNode;
  initialRouteName?: string;
  scrollable?: boolean;
  tabStyle?: {};
};

export type ScreenProps = {
  name: string;
  renderIcon: JSX.Element;
  iconContainerStyle?: {};
  renderHighlighted?: JSX.Element;
};

/**
 * Screen to use into the navigator.
 * Props are:
 *  name
 *  renderIcon = the element to be displayed or the icon in the bar
 *  renderHighlighted = the element to render when the button is highlighted
 *  styleHighlighted = the style to apply when the button is highlighted ! OVERRIDDEN BY renderHighlighted
 *
 */
export class Screen extends React.Component<ScreenProps> {
  constructor(props: ScreenProps) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.screen, { width: Dimensions.get('window').width }]}>
        {this.props.children}
      </View>
    );
  }
}

export default class SlidingTabNavigator extends React.Component<Props, State> {
  scrollView = createRef<ScrollView>();
  screenMap: { name: string; index: number }[] = [];

  static defaultProps = {
    scrollable: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = { highlightedIndex: 0 };

    // set screen name-index map
    if (props.children) {
      if (Array.isArray(props.children)) {
        for (let i = 0; i < props.children.length; i++) {
          if (props.children[i])
            this.screenMap.push({
              name: (props.children[i] as React.Component<ScreenProps>).props
                .name,
              index: i,
            });
        }
      } else {
        this.screenMap.push({
          name: (props.children as React.Component<ScreenProps>).props.name,
          index: 0,
        });
      }
    }

    // set on scroll actions
  }

  componentDidMount() {
    let initialRouteName;
    if (Array.isArray(this.props.children)) {
      if (this.props.children[0])
        initialRouteName = this.props.initialRouteName
          ? this.props.initialRouteName
          : (this.props.children[0] as React.Component<ScreenProps>).props.name;
    } else if (this.props.children) {
      initialRouteName = (this.props.children as React.Component<ScreenProps>)
        .props.name;
    }

    if (initialRouteName) this.setCurrentScreen(initialRouteName);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screenZone}>
          <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            pagingEnabled={true}
            ref={this.scrollView}
            scrollEnabled={this.props.scrollable}
            onScroll={
              this.props.scrollable
                ? (event: NativeSyntheticEvent<NativeScrollEvent>) => {
                    const nearestName = this.getNearestRouteIndexOnScroll(
                      event.nativeEvent.contentOffset.x
                    );
                    const nearestIndex = this.getIndex(nearestName);
                    this.setState({ highlightedIndex: nearestIndex });
                  }
                : () => {}
            }
          >
            {this.props.children}
          </ScrollView>
        </View>
        <View style={[styles.tab, this.props.tabStyle]}>
          {this.props.children ? (
            Array.isArray(this.props.children) ? (
              React.Children.map(
                this.props.children as ReactElement<ScreenProps>[],
                ({ props }: React.ReactElement<ScreenProps>) => (
                  <SlidingTabIcon
                    item={props.renderIcon}
                    iconContainerStyle={props.iconContainerStyle}
                    onPress={() => this.navigate(props.name)}
                    isHighlighted={
                      this.state.highlightedIndex === this.getIndex(props.name)
                    }
                    renderHighlighted={props.renderHighlighted}
                  ></SlidingTabIcon>
                )
              )
            ) : (
              <SlidingTabIcon
                item={
                  (this.props.children as React.Component<ScreenProps>).props
                    .renderIcon
                }
                iconContainerStyle={
                  (this.props.children as React.Component<ScreenProps>).props
                    .iconContainerStyle
                }
                onPress={() =>
                  this.navigate(
                    (this.props.children as React.Component<ScreenProps>).props
                      .name
                  )
                }
                isHighlighted={
                  this.state.highlightedIndex ===
                  this.getIndex(
                    (this.props.children as React.Component<ScreenProps>).props
                      .name
                  )
                }
                renderHighlighted={
                  (this.props.children as React.Component<ScreenProps>).props
                    .renderHighlighted
                }
              />
            )
          ) : null}
        </View>
      </View>
    );
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
            this.getIndex(child.props.name) * Dimensions.get('window').width
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
      this.state = { highlightedIndex: index };
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
      this.setState({ highlightedIndex: index });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenZone: {
    flex: 1,
  },
  tab: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  screen: {
    flex: 1,
  },
  iconContainerStyle: {
    flex: 1,
    alignItems: 'stretch',
  },
});
