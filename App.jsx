import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import Home from './components/Home';
import Account from './components/Account';
import History from './components/History';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux"

const Tab = createMaterialBottomTabNavigator();

function App() {
  const bottomBarEnabled = useSelector((state) => state.styles.bottomBarEnabled)
  console.log(bottomBarEnabled)
  const barStyle = [
    { height: 70, justifyContent: 'center' },
    bottomBarEnabled ? { display: 'none' } : { display: 'flex' },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        backBehavior='history'
        labeled={false}
        barStyle={barStyle}
      >
        <Tab.Screen name="History" component={History}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="history" size={26} color={'white'} />
            )
          }}
        />
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={26} color={'white'} />
            ),
          }}
        />
        <Tab.Screen name="Account" component={Account}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name='folder-account-outline' size={26} color={'white'} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
