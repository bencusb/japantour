import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Video } from 'expo-av';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Main Page</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {/*<Video
          ref={video}
          style ={styles.video}
          source={{uri: './assets/videos/Japan_in_8K_60fps.mp4'}}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />*/}
        <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff2%2Fa9%2F51%2Ff2a95102bc7d1d6cbf43f3b809ac2ed1.jpg&f=1&nofb=1"}} style={styles.image} />
        <Text style={styles.title} >My reasoning</Text>
        <Text style={styles.paragraph}>
          Japan is an economic powerhouse and has a tech welcoming culture. Those two fact's make it an ideal place to set up future operations.
          On the otherhand they're quite systematic and tend to disregard the outliers in society and business. As a tourist I think it has a lot to offer to any interest.
          I elobarate on 2 of these on the other pages and off more to read about the country on the last page. I hope you enjoy the read. 
        </Text>
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
