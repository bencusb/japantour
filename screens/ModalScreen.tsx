import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About The site</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.paragraph}>
        The site is intended as learning project
       for myself on a topic that enjoy in this case Japan and some interesting places to travel there.
       </Text>
      <Text style={styles.paragraph}>Written by Balogh Bence</Text>
      <Text style={styles.paragraph}>JHYJYW</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video:
  {
    alignSelf: 'center',
    width: 600,
    height: 400,
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
