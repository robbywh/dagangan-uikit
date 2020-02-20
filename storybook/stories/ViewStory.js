// @flow
import React from 'react';
import View from '../src/View';
import {Text, StyleSheet} from 'react-native';
import Color from '../src/Color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.BRIGHT_ORANGE,
  },
});

export default function ViewStory() {
  return (
    <View>
      <View marginBottom={20} style={styles.container}>
        <Text>Margin All</Text>
        <View margin={20}>
          <Text>margin=20</Text>
        </View>
      </View>
      <View marginBottom={20} style={styles.container}>
        <Text>Margin Horizontal</Text>
        <View marginX={20}>
          <Text>marginX=20</Text>
        </View>
      </View>
      <View marginBottom={20} style={styles.container}>
        <Text>Margin Vertical</Text>
        <View marginY={20}>
          <Text>marginY=20</Text>
        </View>
      </View>
      <View marginBottom={20} style={styles.container}>
        <Text>Margin Left</Text>
        <View marginLeft={20}>
          <Text>marginLeft=20</Text>
        </View>
      </View>
      <View marginBottom={20} style={styles.container}>
        <Text>Margin Right</Text>
        <View marginRight={20}>
          <Text>marginRight=20</Text>
        </View>
      </View>
      <View marginBottom={20} style={styles.container}>
        <Text>Margin Top</Text>
        <View marginTop={20}>
          <Text>marginTop=20</Text>
        </View>
      </View>
      <View marginBottom={20} style={styles.container}>
        <Text>Margin Bottom</Text>
        <View marginBottom={20}>
          <Text>marginBottom=20</Text>
        </View>
      </View>
    </View>
  );
}
