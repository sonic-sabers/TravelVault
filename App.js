import * as React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/navigation/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LoginScreen from './src/screens/LoginScreen';
// import { Provider } from 'react-redux';
// import store from './src/store/store';
// import useAuth from './src/hooks/useAuth';
// import store from './store/store';
// import useAuth from '../hooks/useAuth';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  // const { user } = useAuth();

  const [loaded, error] = useFonts({
    SpaceMono: require("./src/assets/fonts/SpaceMono-Regular.ttf"),
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    ...FontAwesome.font,
  });
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* <Provider store={store}> */}
          <ThemeProvider
            value={useColorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <ThemeProvider >
              <NavigationContainer>
                <Stack.Navigator initialRouteName="LoginScreen" screenOptions={
                  { headerShown: false }
                }>
                  <Stack.Screen name="LoginScreen" component={LoginScreen} />
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            </ThemeProvider>
          </ThemeProvider>
        {/* </Provider> */}
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;
