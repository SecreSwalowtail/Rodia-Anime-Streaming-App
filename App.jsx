import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Provider } from 'react-native-paper';

import Home from './components/Home';
import Account from './components/Account';
import Search from './components/Search';
import History from './components/History';

const Tab = createMaterialBottomTabNavigator();

function App() {

  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Account" component={Account} />
          <Tab.Screen name="Search" children={Search} />
          <Tab.Screen name="History" children={History} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
