import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home-stack';
import Insurance from '../screens/insurance-stack';
import Inventory from '../screens/inventory-stack';
import Menu from '../screens/menu-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabNavigationParamList} from '../types/navigation';
import Search from '../screens/search-stack';

const {Navigator, Screen} = createBottomTabNavigator<TabNavigationParamList>();

export default function TabNavigation() {
  return (
    <Navigator
      initialRouteName="Inventory"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {fontFamily: 'Poppins-SemiBold'},
      }}>
      <Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name={'Insurance'}
        component={Insurance}
        options={{
          tabBarLabel: 'Insurance',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="umbrella" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name={'Inventory'}
        component={Inventory}
        options={{
          tabBarLabel: 'Inventory',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="file-tray-full-sharp" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name={'Search'}
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name={'Menu'}
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}
