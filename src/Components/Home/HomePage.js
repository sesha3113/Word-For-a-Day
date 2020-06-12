import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import HomeViewStyles from './HomeViewStyles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WordForADayPageStyle from '../WordForADay/WordForADayPageStyles';

export default function HomePage({navigation: {navigate}}) {
  const getDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    console.log(date, month);
    // navigate('Word');
    fetch('http://77db6b762fa0.ngrok.io/getword/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        month: month,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // data = data.json();
        console.log('datatype', typeof data);
        console.log(data.definition);
        navigate('Word', data);
      });
  };

  return (
    <View style={HomeViewStyles.container}>
      <View style={HomeViewStyles.HomeViewHeader}>
        <Text style={HomeViewStyles.HomeViewHeaderText}> Word For a day</Text>
      </View>

      <View style={HomeViewStyles.HomeViewBUtton}>
        <Button
          title="Lets start"
          type="outline"
          color="grey"
          onPress={() => getDate()}
        />
        <Button
          title="Wanna learn more words?"
          type="outline"
          color="grey"
          onPress={() => getDate()}
        />
      </View>
    </View>
  );
}
