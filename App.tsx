import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import themes from './src/global/styles/theme';
import { Dashboard } from './src/pages/Dashboard';
import { Register } from './src/pages/Register';

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
    <ThemeProvider theme={themes}>
      <StatusBar style="light" />
      {/* <Dashboard /> */}
      <Register />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  isLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
