
import  React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Form } from './Form';
import { Display } from './display';
import { Singleuser } from './Singleuser';
import { Edit } from './Edit';
import { Search } from './Search';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Display" component={Display} /> 
        <Stack.Screen name="Singleuser" component={Singleuser} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Search" component={Search} /> 
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
