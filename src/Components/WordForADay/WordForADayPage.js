import React, {Component} from 'react';
import {View, Text, SafeAreaView } from 'react-native';
import WordForADayPageStyle from './WordForADayPageStyles';
export default function WordForADayPage({route, navigation}) {
  const {word} = route.params;
  const {definition} = route.params;
  const {example} = route.params;

  return (
    <SafeAreaView  style={WordForADayPageStyle.container}>
      <View style={WordForADayPageStyle.TopBox}>
        <Text style={WordForADayPageStyle.TopBoxText}> word for a day </Text>
      </View>
      <View style={WordForADayPageStyle.InnerContainer}>
        <View>
          <Text style={WordForADayPageStyle.MiddleWordForADay}>
            Word for Today{' '}
          </Text>
          <View style={WordForADayPageStyle.Line} />
          <Text style={WordForADayPageStyle.Word}> {word} </Text>
        </View>
        <View style={WordForADayPageStyle.LowerBox}>
          <Text style={WordForADayPageStyle.LowerBoxHeader}> Definition: </Text>
          <Text style={WordForADayPageStyle.MeaningAndExample}>
            {' '}
            {definition}{' '}
          </Text>
          <Text style={WordForADayPageStyle.LowerBoxHeader}> Example: </Text>
          <Text style={WordForADayPageStyle.MeaningAndExample}>
            {' '}
            {example}{' '}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
