import React from 'react';
import {Dimensions, Pressable, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TabHeader from '../../components/general/tab-header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InventoryList from '../../components/inventory/inventory-list';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/colors';
import {TabNavigationProp} from '../../types/navigation';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function Inventory() {
  const navigation = useNavigation<TabNavigationProp>();

  const renderAddInventory = (
    <Pressable onPress={() => navigation.navigate('AddInventory')}>
      <Ionicons name={'add-circle'} size={40} color={colors.blue} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <TabHeader title={'Inventory'} rightComponent={renderAddInventory} />
        <InventoryList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {},

  container: {
    height: screenHeight,
    width: screenWidth,
    paddingHorizontal: 10,
    paddingTop: 40,
  },

  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
