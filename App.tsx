import 'react-native-gesture-handler';
// import 'intl/locale-data/jsonp/pt-BR';
// import 'intl';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import themes from './src/global/styles/theme';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  
  if (!fontsLoaded) {
    return <Text style={styles.isLoading}>Carregando...</Text> 
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={themes}>
        <NavigationContainer>
          <StatusBar 
            barStyle="light-content" 
            backgroundColor='transparent'
            translucent
            />
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  isLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
