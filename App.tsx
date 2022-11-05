import React from 'react';
import { Text, StyleSheet, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { AppRoutes } from './src/routes/app.routes';
import themes from './src/global/styles/theme';
import { Register } from './src/pages/Register';
import { Dashboard } from './src/pages/Dashboard';
import { CategorySelect } from './src/pages/CategorySelect';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
