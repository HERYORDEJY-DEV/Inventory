import React from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import InventoryItem from './inventory-item';
import {AppContext} from '../../context';
import {AppContextTypes} from '../../types/context';

const {height: screenHeight} = Dimensions.get('screen');

export default function InventoryList() {
  const {state} = React.useContext(AppContext) as AppContextTypes;

  const data = state?.inventories;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      bounces={false}
      data={data}
      renderItem={({item, index}) => <InventoryItem {...item} index={index} />}
      keyExtractor={(item, index) => `${index}`}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
}

const styles = StyleSheet.create({
  columnWrapperStyle: {gap: 20},
  contentContainerStyle: {paddingTop: 20, paddingBottom: screenHeight * 0.2},
});
