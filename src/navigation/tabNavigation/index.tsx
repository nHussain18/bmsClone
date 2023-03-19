import * as React from 'react';
import {Platform, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../container/Home';
import EventScreen from '../../container/Events';
import ProfileScreen from '../../container/Profile';
import {COLORS} from '../../theme';

const Tab = createBottomTabNavigator();

export default function App() {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(COLORS.darkSecondary);
    }
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Events" component={EventScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
