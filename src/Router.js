import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, About, Services} from './pages';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={'Cities'}
          component={CityList}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="AboutPage" component={About} />
        <Stack.Screen name="ServicesPage" component={Services} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
