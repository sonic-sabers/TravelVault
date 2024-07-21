



// import * as React from 'react';
// import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import {
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';
// import Animated, {
//   SharedTransition,
//   withSpring,
//   SharedTransitionType,
// } from 'react-native-reanimated';
// import { NavigationContainer } from '@react-navigation/native';
// const Stack = createNativeStackNavigator();
// const tempItems = [
//   { item: "Item 1", price: "10", id: 1 },
//   { item: "Item 2", price: "20", id: 2 },
//   { item: "Item 3", price: "30", id: 3 },
//   { item: "Item 4", price: "40", id: 4 },
//   { item: "Item 5", price: "50", id: 5 },
//   { item: "Item 6", price: "60", id: 6 },
//   { item: "Item 7", price: "70", id: 7 },
//   { item: "Item 8", price: "80", id: 8 },
//   { item: "Item 9", price: "90", id: 9 },
//   { item: "Item 10", price: "100", id: 10 },
//   { item: "Item 11", price: "110", id: 11 },
//   { item: "Item 12", price: "120", id: 12 },
//   { item: "Item 13", price: "130", id: 13 },
//   { item: "Item 14", price: "140", id: 14 },
//   { item: "Item 15", price: "150", id: 15 },
// ]
// const transition = SharedTransition.duration(400)
//   .custom((values) => {
//     'worklet';
//     return {
//       width: withSpring(values.targetWidth, {
//         mass: 1,
//         damping: 100,
//         stiffness: 100,

//       }),
//       height: withSpring(values.targetHeight, {
//         mass: 1,
//         damping: 100,
//         stiffness: 100,

//       }),
//       originX: withSpring(values.targetOriginX, {
//         mass: 1,
//         damping: 100,
//         stiffness: 100,

//       }),
//       originY: withSpring(values.targetOriginY, {
//         mass: 1,
//         damping: 100,
//         stiffness: 100,

//       }),
//     };
//   })
//   .progressAnimation((values, progress) => {
//     'worklet';
//     const getValue = (
//       progress,
//       target,
//       current
//     ) => {
//       return progress * 2 * (target - current) + current;
//     };
//     return {
//       width: getValue(progress, values.targetWidth, values.currentWidth),
//       height: getValue(progress, values.targetHeight, values.currentHeight),
//       originX: getValue(progress, values.targetOriginX, values.currentOriginX),
//       originY: getValue(progress, values.targetOriginY, values.currentOriginY),
//     };
//   })
//   .defaultTransitionType(SharedTransitionType.ANIMATION);

// function Screen1({ navigation }) {
//   return (
//     <Animated.ScrollView style={styles.flexOne}>

//       {tempItems.map((item, index) => (

//         <Animated.View
//           key={item.id}

//           style={{ width: 150, height: 100, backgroundColor: 'green', marginTop: 12, justifyContent: "center", alignItems: 'center', alignSelf: 'center', borderRadius: 8 }}
//           sharedTransitionTag={`item.${item.price}.price`}
//           sharedTransitionStyle={transition}
//         >
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Screen2', { item })}
//             key={item.id}>
//             <View style={styles.summary}>
//               <Text style={styles.summaryText}>
//                 {item.item} <Text style={styles.amount}>
//                   ${item.price}</Text>
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </Animated.View>
//       ))
//       }

//       <Animated.View
//         style={styles.greenBoxScreenOne}
//         sharedTransitionTag="tag"
//         sharedTransitionStyle={transition}
//       />
//       <Button
//         onPress={() => navigation.navigate('Screen2')}
//         title="go to screen2"
//       />
//     </Animated.ScrollView >
//   );
// }

// function Screen2({ navigation, route }) {
//   const { item } = route.params

//   return (
//     <View style={styles.flexOne}>
//       <Animated.View
//         style={{ width: 200, height: 150, backgroundColor: 'blue', alignSelf: 'center', justifyContent: "center", alignItems: 'center', borderRadius: 10 }}
//         // sharedTransitionTag="sharedTag"
//         sharedTransitionTag={`item.${item.price}.price`}
//         sharedTransitionStyle={transition}

//       >
//         <Text
//           style={{
//             fontSize: 20,
//             fontWeight: '400',
//             fontFamily: 'Roboto',
//             color: '#000'
//           }}>
//           {item.price}
//         </Text>
//       </Animated.View>
//       {/* <Animated.View
//         style={styles.greenBoxScreenTwo}
//         sharedTransitionTag="tag"
//         sharedTransitionStyle={transition}
//       /> */}
//       <Button title="go back" onPress={() => navigation.navigate('Screen1')} />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Screen1"
//           component={Screen1}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Screen2"
//           component={Screen2}
//           options={{
//             headerShown: false,
//             presentation: 'card',
//             animationTypeForReplace: 'push',
//             animation: 'fade'
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   flexOne: { flex: 1, backgroundColor: "#f1f1f1" },
//   greenBoxScreenOne: {
//     width: 150,
//     height: 150,
//     marginLeft: 20,
//     marginTop: 50,
//     backgroundColor: 'green',
//   },
//   greenBoxScreenTwo: {
//     width: 200,
//     height: 300,
//     marginLeft: 60,
//     marginTop: 100,
//     backgroundColor: 'green',
//   },
// });