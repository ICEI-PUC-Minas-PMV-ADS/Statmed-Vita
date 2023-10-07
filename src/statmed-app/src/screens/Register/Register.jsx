import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Button } from 'react-native-paper';
import StatmedVitaLogo from '../../../assets/statmedvita-logo.png'
import { Checkbox } from 'react-native-paper';

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Register() {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30 }}>
      <Image
        style={{
          width: '100%',
          height: 67,
        }}
        source={StatmedVitaLogo}
      />
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          label="Name"
          secureTextEntry
          right={<TextInput.Icon icon="account-circle-outline" />}
        />
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <TextInput
          style={styles.input}
          label="CPF"
          secureTextEntry
          right={<TextInput.Icon icon="card-account-details-outline" />}
        />
        <TextInput
          style={styles.input}
          label="Birthdate"
          secureTextEntry
          right={<TextInput.Icon icon="calendar" />}
        />
        <TextInput
          style={styles.input}
          label="Email"
          secureTextEntry
          right={<TextInput.Icon icon="at" />}
        />
      </View>
      <Button style={styles.button} uppercase icon="exit-to-app" mode="contained" onPress={() => console.log('Pressed')}>
        Entrar
      </Button>
      <View>
        <Text style={styles.text}>PRIMEIRO ACESSO? <Text style={styles.textLink}>CADASTRE-SE</Text></Text>
      </View>

      <View>
        <Text style={styles.middleText} variant='bodyLarge'>OU CONTINUE COM</Text>
      </View>
      <Button style={styles.socialMediaButton} uppercase icon="google" mode="contained" onPress={() => console.log('Pressed')}>
        Google
      </Button>
      <Button style={styles.socialMediaButton} uppercase icon="facebook" mode="contained" onPress={() => console.log('Pressed')}>
        Facebook
      </Button>

    </View>
  );
}
