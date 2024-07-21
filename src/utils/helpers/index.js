
const { Vibration, LayoutAnimation, Platform, Dimensions } = require("react-native")

const layoutAnimation = () => {
	LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
}
const screen = {
	height: Dimensions.get('window').height,
	width: Dimensions.get('window').width,
}
const isAndroid = Platform.OS === 'android'

function hapticFeedback() {
	if (isAndroid) {
		Vibration.vibrate(10)
	} else {
		const options = {
			enableVibrateFallback: true,
			ignoreAndroidSystemSettings: false,
		}

		// ReactNativeHapticFeedback.trigger('impactMedium', options)
	}
}

export { layoutAnimation, screen,  hapticFeedback }