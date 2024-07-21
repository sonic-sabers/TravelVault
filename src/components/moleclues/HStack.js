import { StyleSheet, View } from 'react-native'
import React from 'react'

const HStack = ({
	children,
	bgColor,
	alignItems = 'flex-start',
	justifyContent = 'flex-start',
	flexWrap = 'nowrap',
	alignSelf = 'stretch',
	style,
}) => {
	if (!children) return <></>

	const styleProps = React.useMemo(
		() => ({
			backgroundColor: bgColor ? bgColor : 'transparent',
			flexWrap,
			justifyContent,
			alignSelf,
			alignItems,
		}),
		[bgColor, alignItems, justifyContent, flexWrap, alignSelf]
	)

	return <View style={[styles.row, styleProps, style]}>{children}</View>
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
})

export default HStack
