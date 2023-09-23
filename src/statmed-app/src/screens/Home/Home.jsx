import * as React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { Image } from 'expo-image';
import styles from './styles';
import StatmedVitaLogo from '../../../assets/statmedvita-logo.png'

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Homes</Text>
      <Image
        style={styles.image}
        source={StatmedVitaLogo}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      />
    </View>
  );
}
