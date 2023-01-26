import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function Insurance() {
  return (
    <SafeAreaView style={{}}>
      <View style={styles.container}>
        <Text style={styles.text}>This is the Insurance Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
});
