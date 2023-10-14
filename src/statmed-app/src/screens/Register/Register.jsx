import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Button } from 'react-native-paper';
import StatmedVitaLogo from '../../../assets/statmedvita-logo.png'
import { Checkbox } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Register() {
  const [checked, setChecked] = React.useState(false);
  const [ email, setEmail ] =  React.useState('')
  const [ password, setPassword ] =  React.useState('')
  const { onLogin, onRegister } = useAuth()

  const login = async () => {
    const result = await onLogin(email, password)

    if (result && result.error) {
      alert(result.msg)
    }
  }

  const register = async () => {
    const result = await onRegister(email, password)

    if (result && result.error) {
      alert(result.msg)
    } else {
      login()
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30, marginVertical: 30 }}>
      <ScrollView>
      <Image
        style={{
          width: '100%',
          height: 67,
          marginBottom: 16,
        }}
        source={StatmedVitaLogo}
      />
      <View style={{ flex: 1 }}>
        <TextInput
          style={styles.input}
          label="Name"
          right={<TextInput.Icon icon="account-circle-outline" />}
        />
        <TextInput
          style={styles.input}
          label="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          right={<TextInput.Icon icon="eye" />}
        />
        {/* <TextInput
          style={styles.input}
          label="Repeat Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          right={<TextInput.Icon icon="eye" />}
        /> */}
        <TextInput
          style={styles.input}
          label="CPF"
          right={<TextInput.Icon icon="card-account-details-outline" />}
        />
        {/* <TextInput
          style={styles.input}
          label="Birthdate"
          right={<TextInput.Icon icon="calendar" />}
        /> */}
        <TextInput
          style={styles.input}
          label="Email"
          onChangeText={(text) => setEmail(text)}
          right={<TextInput.Icon icon="at" />}
        />
      </View>
      <Button style={styles.button} uppercase icon="exit-to-app" mode="contained" onPress={register}>
        Registrar
      </Button>
      <View>
        <Text style={styles.middleText} variant='bodyLarge'>OU CONTINUE COM</Text>
      </View>
      <Button style={styles.socialMediaButton} uppercase icon="google" mode="contained" onPress={() => console.log('Pressed')}>
        Google
      </Button>
      <Button style={styles.socialMediaButton} uppercase icon="facebook" mode="contained" onPress={() => console.log('Pressed')}>
        Facebook
      </Button>
      </ScrollView>
    </View>
  );
}
