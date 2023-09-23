import * as React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { Image } from 'expo-image';

import StatmedVitaLogo from '../../assets/statmedvita-logo.png'

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function MyHealth() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyHealth</Text>
      <Image
        style={styles.image}
        source={StatmedVitaLogo}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});