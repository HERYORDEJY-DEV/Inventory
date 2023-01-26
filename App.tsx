/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, Text, TextInput, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import setDefaultProps from 'react-native-simple-default-props';
import RootNavigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppContextProvider from './src/context';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  setDefaultProps(Text, {
    style: {
      color: '#000000',
      fontSize: 14,
      fontFamily: 'Poppins',
    },
    allowFontScaling: false,
  });

  setDefaultProps(TextInput, {
    style: {
      color: '#000000',
      fontSize: 14,
      fontFamily: 'PoppinsRegular',
      backgroundColor: '#FFFFFF',
      height: 56,
      flex: 1,
    },
    underlineColorAndroid: 'transparent',
    allowFontScaling: false,
  });

  return (
    <AppContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContextProvider>
  );
}

export default App;
