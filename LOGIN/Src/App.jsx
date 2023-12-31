import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store';
import Screen1 from './Screen1';
// import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';
import Screen6 from './Screen6';
import Screen7 from './Screen7';
import LastScreen from './LastScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen1" component={Screen1} />
         {/* <Stack.Screen name="Screen2" component={Screen2} />*/}
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
          <Stack.Screen name="Screen5" component={Screen5} />
          <Stack.Screen name="Screen6" component={Screen6} />
          <Stack.Screen name="Screen7" component={Screen7} />

          <Stack.Screen name="LastScreen" component={LastScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;