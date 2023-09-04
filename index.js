/**
 * @format
 */

import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, MD3DarkTheme as DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import { store }  from './redux/store';
import { MMKV } from 'react-native-mmkv'
import { colors } from './styles/colors';

export const storage = new MMKV()

const theme = {
    ...DefaultTheme,
    colors: colors.colors
  }

export default function Main() {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <App />
            </PaperProvider>
        </StoreProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
