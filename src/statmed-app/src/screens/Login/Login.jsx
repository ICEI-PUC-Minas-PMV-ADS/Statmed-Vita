import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Button } from 'react-native-paper';
import StatmedVitaLogo from '../../../assets/statmedvita-logo.png'
import { useAuth } from '../../context/AuthContext';


export default function Login() {
  const [checked, setChecked] = React.useState(false);
  const [ email, setEmail ] =  React.useState('')
  const [ password, setPassword ] =  React.useState('')
  const { onLogin } = useAuth()

  const login = async () => {
    const result = await onLogin(email, password)

    if (result && result.error) {
      alert(result.msg)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 30 }}>
      <Image
        style={{
          width: '100%',
          height: 67,
          marginBottom: 16,
        }}
        source={StatmedVitaLogo}
      />
      <TextInput
        style={styles.input}
        value={email}
        label="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        value={password}
        label="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <Button style={styles.button} uppercase icon="exit-to-app" mode="contained" onPress={login}>
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
