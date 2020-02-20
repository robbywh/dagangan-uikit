// @flow
import React from 'react';
import Text from '../src/Text';
import {StyleSheet, ScrollView} from 'react-native';
import View from '../src/View';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const dataText = [
  'headline1',
  'headline2',
  'headline3',
  'headline4',
  'bodytext1',
  'bottomnavbar',
  'textprice1',
  'textprice2',
  'textprice3',
  'discountPrice',
];

export default function TextStory() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {dataText.map(val => (
        <View key={val} marginBottom={20}>
          <Text variant={val}>{val}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
