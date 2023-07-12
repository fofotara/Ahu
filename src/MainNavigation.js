import * as React from 'react';

import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import reducers from './redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import App from './screens/App';
import SelectTop from './screens/SelectTop';
import NewOperation from './screens/NewOperation';
import SelectTim from './screens/SelectTim';
import SelectTarget from './screens/SelectTarget';
import FinalMaps from "./screens/FinalMaps";
import Calculators from "./screens/Calculators";
import EditTims from "./screens/EditTims";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator
           //   initialRouteName={'Calculators'}
          >
        <Stack.Screen  options={{headerShown: false}} name={'Home'} component={App} />
        <Stack.Screen   name={'NewOperation'} component={NewOperation} />
        <Stack.Screen   name={'SelectTop'} component={SelectTop} />
        <Stack.Screen   name={'SelectTim'} component={SelectTim} />
        <Stack.Screen   name={'SelectTarget'} component={SelectTarget} />
        <Stack.Screen   name={'FinalMaps'} component={FinalMaps} />
        <Stack.Screen   name={'Calculators'} component={Calculators} />
        <Stack.Screen   name={'EditTims'} component={EditTims} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MainNavigation;
