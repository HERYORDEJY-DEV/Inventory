import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {InventoryTypes} from '../../types/inventory';
import {colors} from '../../utils/colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

export default function InventoryItem({
  name,
  photo,
  purchasePrice,
}: InventoryTypes) {
  const [loadingImage, setLoadingImage] = React.useState(false);

  return (
    <Pressable style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: photo}}
            style={styles.image}
            onLoadStart={() => setLoadingImage(true)}
            onLoadEnd={() => setLoadingImage(false)}
          />
          {loadingImage && (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator color={colors.blue} size={'large'} />
            </View>
          )}
        </View>

        <View style={styles.descWrapper}>
          <Text style={styles.name} numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.purchasePrice}>€{purchasePrice}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#171717',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 10,
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  wrapper: {
    height: screenHeight * 0.35,
    width: screenWidth * 0.45,
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageWrapper: {height: '70%', width: '100%'},
  descWrapper: {
    height: '30%',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {height: undefined, width: undefined, flex: 1, resizeMode: 'stretch'},
  name: {fontFamily: 'Poppins-SemiBold', fontSize: 16},
  purchasePrice: {color: '#AAA', fontFamily: 'Poppins-Regular'},
  loadingWrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#AAAAAA50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
