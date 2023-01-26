import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

export type RootStackParamList = {
  TabNavigation: undefined;
  AddInventory: undefined;
};

export type TabNavigationParamList = {
  Home: undefined;
  Insurance: undefined;
  Inventory: undefined;
  Search: undefined;
  Menu: undefined;
};

export type TabNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TabNavigation'
>;

export type AddInventoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddInventory'
>;
