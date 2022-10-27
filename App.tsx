import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import themes from './src/global/styles/theme';
import { Dashboard } from './src/pages/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <StatusBar style="light" />
      <Dashboard />
    </ThemeProvider>
  );
}
