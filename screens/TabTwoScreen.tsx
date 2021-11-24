import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Tokyo</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(240,240,240,0.1)" />
        <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjapantoday-asset.scdn3.secure.raxcdn.com%2Fimg%2Fstore%2Fdf%2F35%2F4497352243557062bb79a0e984f55da1e07b%2Fviuew%2F_w640_h480_cv25.jpg&f=1&nofb=1"}} style={styles.image} /> 
        <Text style={styles.paragraph}>
          This city is so vast that I cannot go into details or else you'd be sitting here for days.
          That said I'm going to talk about it a more general sense and mention a few places that are notable.
        </Text>
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tokyo_Metropolis_Map.svg/1000px-Tokyo_Metropolis_Map.svg.png"}} style={styles.image} /> 
        <Text style={styles.paragraph}>
          Tokyo (Japanese: 東京, Tōkyō [toːkʲoː], officially the Tokyo Metropolis (Japanese: 東京都, Tōkyō-to), is the capital and most populous prefecture of Japan. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central Pacific coast of Japan's main island of Honshu. Tokyo is the political and economic center of the country, as well as the seat of the Emperor of Japan and the national government. As of 2021, the prefecture has an estimated population of 14.04 million. The Greater Tokyo Area is the most populous metropolitan area in the world, with an estimated 37.468 million residents in 2018.

          Originally a fishing village, named Edo, the city became a prominent political center in 1603, when it became the seat of the Tokugawa shogunate. By the mid-18th century, Edo was one of the most populous cities in the world at over one million. Following the end of the shogunate in 1868, the imperial capital in Kyoto was moved to the city, which was renamed Tokyo (literally "eastern capital"). Tokyo was devastated by the 1923 Great Kantō earthquake, and again by Allied bombing raids during World War II. Beginning in the 1950s, the city underwent rapid reconstruction and expansion, going on to lead Japan's post-war economic recovery. Since 1943, the Tokyo Metropolitan Government has administered the prefecture's 23 special wards (formerly Tokyo City), various bed towns in the western area, and two outlying island chains.

          Tokyo is the largest urban economy in the world by gross domestic product, and is categorized as an Alpha+ city by the Globalization and World Cities Research Network. Part of an industrial region that includes the cities of Yokohama, Kawasaki, and Chiba, Tokyo is Japan's leading center of business and finance. In 2019, it hosted 36 of the Fortune Global 500 companies. In 2020, it ranked fourth on the Global Financial Centres Index, behind New York City, London, and Shanghai. Tokyo has the world's tallest tower, Tokyo Skytree, and the world's largest underground floodwater diversion facility, MAOUDC. The Tokyo Metro Ginza Line is the oldest underground metro line in East Asia (1927).

          The city has hosted multiple international events, including the 1964 Summer Olympics and Paralympics, the postponed 2020 Summer Olympics and Paralympics and three G7 Summits (1979, 1986, and 1993). Tokyo is an international center of research and development and is represented by several major universities, notably the University of Tokyo. Tokyo Station is the central hub for Japan's Shinkansen bullet train system, and the city is served by an extensive network of rail and subways. Notable districts of Tokyo include Chiyoda (the site of the Imperial Palace), Shinjuku (the city's administrative center), and Shibuya (a commercial, cultural and business hub). 
        </Text>
        <Text style={styles.title} >Akihabara</Text>
        <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoolphotojapan.com%2Fcoolphotojapan%2Fwp-content%2Fuploads%2F2015%2F08%2FMYP4337150813HDR2.jpg&f=1&nofb=1"}} style={styles.image} /> 
        <Text style={styles.paragraph}>Akihabara (Japanese: 秋葉原) is a common name for the area around Akihabara Station in the Chiyoda ward of Tokyo, Japan. Administratively, the area called Akihabara mainly belongs to the Sotokanda (外神田) and Kanda-Sakumachō districts in Chiyoda. There exists an administrative district called Akihabara in the Taitō ward further north of Akihabara Station, but it is not the place people generally refer to as Akihabara.

            The name Akihabara is a shortening of Akibagahara (秋葉ヶ原), which ultimately comes from Akiba (秋葉), named after a fire-controlling deity of a firefighting shrine built after the area was destroyed by a fire in 1869.

            Akihabara gained the nickname Akihabara Electric Town (秋葉原電気街, Akihabara Denki Gai) shortly after World War II for being a major shopping center for household electronic goods and the post-war black market.

            Akihabara is considered by many to be the centre of modern Japanese popular culture and a major shopping district for video games, anime, manga, electronics and computer-related goods. Icons from popular anime and manga are displayed prominently on the shops in the area, and numerous maid cafés and some arcades are found throughout the district. 
        </Text>
        <Text style={styles.title} >Tokyo Skytree</Text>
        <Image source={{uri: "https://www.nippon.com/en/ncommon/contents/views/43435/43435.jpg"}} style={styles.image} />
        <Text style={styles.paragraph}>
          Tokyo Skytree (東京スカイツリー, Tōkyō Sukaitsurī, stylized TOKYO SKYTREE) is a broadcasting and observation tower in Sumida, Tokyo. It became the tallest structure in Japan in 2010 and reached its full height of 634 meters (2,080 ft) in March 2011, making it the tallest tower in the world, displacing the Canton Tower, and the second tallest structure in the world after the Burj Khalifa (829.8 m or 2,722 ft).[6]

          The tower is the primary television and radio broadcast site for the Kantō region; the older Tokyo Tower no longer gives complete digital terrestrial television broadcasting coverage because it is surrounded by high-rise buildings. Skytree was completed on Leap Day, 29 February 2012, with the tower opening to the public on 22 May 2012. The tower is the centrepiece of a large commercial development funded by Tobu Railway (which owns the complex) and a group of six terrestrial broadcasters headed by NHK. Trains stop at the adjacent Tokyo Skytree Station and nearby Oshiage Station. The complex is seven kilometres (4+1⁄2 miles) northeast of Tokyo Station. In addition, there is the Sumida Aquarium in the "Tokyo Solamachi" complex. 
        </Text>
        <Text style={styles.title} >Tokyo Imperial Palace</Text>
        <Image source={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages4.alphacoders.com%2F585%2Fthumb-1920-585423.jpg&f=1&nofb=1"}} style={styles.image} />
        <Text style={styles.paragraph}>The Tokyo Imperial Palace (皇居, Kōkyo, literally 'Imperial Residence') is the main residence of the Emperor of Japan. It is a large park-like area located in the Chiyoda district of the Chiyoda ward of Tokyo and contains several buildings including the main palace (宮殿, Kyūden), some residences of the Imperial Family, an archive, museums and administrative offices.

          It is built on the site of the old Edo Castle. The total area including the gardens is 1.15 square kilometres (0.44 sq mi). During the height of the 1980s Japanese property bubble, the palace grounds were valued by some to be more than the value of all of the real estate in the state of California. 
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
