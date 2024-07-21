import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, {
	runOnUI,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import {
	TabNavigationState,
	ParamListBase,
	NavigationHelpers,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
export const routes = {
	tickets: { name: "Tickets", icon: "ticket" },
	idcards: { name: "ID-CARDS", icon: "id-card-o" },
	route: { name: "ROUTE", icon: "map-signs" },
};
type Props = {
	state: TabNavigationState<ParamListBase>;
	descriptors: any;
	navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const { width } = Dimensions.get("window");

const TAB_WIDTH = (width - 70 * 2) / 3;
export default function AnimatedBottomTab({
	state,
	navigation,
	descriptors,
}: Props) {
	// const AnimatedBottomTab =  => {
	const translateX = useSharedValue(0);
	const focusedTab = state.index;

	// console.log('routes[routeName]',state.routes)
	const handleAnimate = (index: number) => {
		"worklet";
		translateX.value = withTiming(index * TAB_WIDTH, {
			duration: 200,
		});
	};
	useEffect(() => {
		runOnUI(handleAnimate)(focusedTab);
	}, [focusedTab]);

	const rnStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		};
	});
	return (
		<>
			<Animated.View style={[styles.container, rnStyle]} />
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
						: route.name;

				const isFocused = state.index === index;

				const onPress = () => {

					const event = navigation.emit({
						type: "tabPress",
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({
							name: route.name,
							merge: true,
							params: {},
						});
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: "tabLongPress",
						target: route.key,
					});
				};
				const routeName = route.name.toLowerCase() as keyof typeof routes;
				const icon = routes[routeName]?.icon;
				// console.log("routeName", routeName, route.name, icon);
				return (
					<Pressable
						key={`route-${index}`}
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={styles.item}>
						<>
							<FontAwesome
								name={icon}
								size={24}
								style={{
									marginTop: 4,
								}}
								color={!isFocused ? "#EDEDED" : "#1A1D1E"}
							/>
							<Text
								style={[
									{
										fontSize: 10,
										fontFamily: "Inter_400Regular",
										marginVertical: 4,
									},
									{ color: !isFocused ? "rgba(255, 255, 255, 0.59)" : "black" },
								]}>
								{route?.name}
							</Text>
						</>
					</Pressable>
				);
			})}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: TAB_WIDTH,
		height: 60,
		backgroundColor: "white",
		zIndex: 0,
		position: "absolute",
		marginHorizontal: 10,
		borderRadius: 12,
	},
	item: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// paddingTop: 8
	},
});