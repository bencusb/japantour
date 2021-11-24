import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>More to read</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 16,
    alignItems: 'center',
    textAlign:'center',
  },
  separator: {
    marginTop: 20,
    height: 1,
    width: '80%',
  },
  image: {
    width: '80%',
    height: 400,
    resizeMode: 'cover'
  },
});
