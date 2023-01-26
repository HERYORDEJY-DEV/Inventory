import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
  rightComponent?: React.ReactNode;
}

export default function TabHeader({title, rightComponent}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {rightComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
});
