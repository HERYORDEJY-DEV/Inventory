import React from 'react';
import TabNavigation from './tab-navigation';
import AddInventory from '../screens/inventory-stack/add-inventory';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <Navigator
      initialRouteName="TabNavigation"
      screenOptions={{headerShown: false}}>
      <Screen name={'TabNavigation'} component={TabNavigation} />
      <Screen
        name={'AddInventory'}
        component={AddInventory}
        options={{presentation: 'modal'}}
      />
    </Navigator>
  );
}
