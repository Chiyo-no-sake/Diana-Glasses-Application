import React, {useState} from "react";

import {StyleSheet, Switch, Text, View} from "react-native";
import theme from "../../../../styles/theme";

type Props = {}

const SwitchOption = (props: Props) => {
	const [isEnabled, setEnabled] = useState(false);

	return <View style={styles.row}>
		<View style={styles.left}>
			<Text style={styles.text}>Switch Option Custom Text</Text>
		</View>
		<View style={styles.right}>
			<Switch
				value={isEnabled}
				onValueChange={setEnabled}
				trackColor={{false: "#767577", true: "#ffc4a3"}}
				thumbColor={isEnabled ? "#ff8b47" : "#f4f3f4"}
			/>
		</View>
	</View>
}

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		marginHorizontal: theme.app.margins.marginSmall,
		marginVertical: theme.app.margins.marginSmall,
	},
	left: {
		flex: 1,
		justifyContent: 'center',
	},
	right: {
		alignItems: 'center',
	},
	text: {
		fontSize: theme.app.font.fontSizeMedium,
	}
})

export default SwitchOption;
