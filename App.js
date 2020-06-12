/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import HomePage from './src/Components/Home/HomePage';
import WordForADayPage from './src/Components/WordForADay/WordForADayPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Word" component={WordForADayPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
