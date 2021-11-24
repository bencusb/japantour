import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Hokkaido</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.kimkim.com%2Ffiles%2Fa%2Fimages%2F12956f01b26ad81afdd565c8e68dccef159b12d7%2Fbig-d8fe02da47643173d4eb22e71185a939.jpg&f=1&nofb=1"}} style={styles.image} />
        <Text style={styles.paragraph}>
        Hokkaidō (Japanese: 北海道, Hepburn: Hokkaidō, literally "Northern Sea Circuit" or "Northern Sea Region", pronounced [hokkaidoː]), officially Hokkaidō Circuit Prefecture, is the second largest island of Japan and comprises the largest and northernmost prefecture. The Tsugaru Strait separates Hokkaidō from Honshu; the two islands are connected by the undersea railway Seikan Tunnel.

        The largest city on Hokkaidō is its capital, Sapporo, which is also its only ordinance-designated city. Sakhalin lies about 43 kilometers (26 mi) to the north of Hokkaidō, and to the east and northeast are the Kuril Islands, which are administered by Russia, though the four most southerly are claimed by Japan. Hokkaidō was formerly known as Ezo, Yezo, Yeso, or Yesso.
        </Text>
        <Text style={styles.title}>Onsen culture</Text>
        <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.kyuhoshi.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fhotel_daiheigen_tokachigawa_onsen_hokkaido_japan.jpg%3Fresize%3D600%252C400%26ssl%3D1&f=1&nofb=1"}} style={styles.image} />
        <Text style={styles.paragraph}>

        </Text>
        <Text style={styles.title}>Daisetsuzan National Park</Text>
        <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.chasingmeridians.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fdaisetsuzan-32.jpg%3Fresize%3D4608%252C3072%26ssl%3D1&f=1&nofb=1"}} style={styles.image} />
        <Text style={styles.paragraph}>
          Daisetsuzan National Park (大雪山国立公園, Daisetsuzan Kokuritsu Kōen), or Taisetsuzan is located in the mountainous center of the northern Japanese island of Hokkaidō. At 2,267.64 square kilometres (875.54 sq mi), Daisetsuzan is the largest national park in Japan, and is approximately the size of Kanagawa Prefecture. Daisetsuzan, meaning "great snowy mountains", an apt description of these peaks. There are 16 peaks over 2,000 metres (6,600 ft) in Daisetsuzan National Park, both with and without trails. The park offers some of the most rugged scenery in Japan. Asahidake (2,290 metres (7,510 ft)), located in the north of the park, is the highest peak in Hokkaidō. Daisetsuzan National Park spans two subprefectures of Hokkaidō, Kamikawa and Tokachi. Daisetsuzan National Park was established in 1934.
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
