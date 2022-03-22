import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Detail} from '@screens';
import {routes} from '@routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.Home} component={Home} />
        <Stack.Screen name={routes.Detail} component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
