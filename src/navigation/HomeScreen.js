import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBar } from '../components';
import RootNavigator from './RootNavigator';
import OtherScreen from '../screens/OtherScreen';

const BottomTab = createBottomTabNavigator();
export default function HomeScreen() {
  return (
    <BottomTab.Navigator tabBar={TabBar} screenOptions={{
      headerShown: false
    }}>
      <BottomTab.Screen name="TICKETS" component={RootNavigator} />
      <BottomTab.Screen name="IDCARDS" component={OtherScreen} />
      <BottomTab.Screen name="ROUTE" component={OtherScreen} />
    </BottomTab.Navigator>
  );
}