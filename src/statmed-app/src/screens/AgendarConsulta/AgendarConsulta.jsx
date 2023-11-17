import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Button, Checkbox } from 'react-native-paper';
import StatmedVitaLogo from '../../../assets/statmedvita-logo.png'
import { API_URL, useAuth } from '../../context/AuthContext';
import axios from 'axios';
import {SelectList }from 'react-native-dropdown-select-list'
import { Appbar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function AgendarConsulta() {
  const data = [
    {key:'Canada', value:'Canada'},
    {key:'England', value:'England'},
    {key:'Pakistan', value:'Pakistan'},
    {key:'India', value:'India'},
    {key:'NewZealand', value:'NewZealand'},
  ]
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [selected, setSelected] = React.useState("");
  const [items, setItems] = React.useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [teleconsulta, setTeleconsulta] = React.useState(false);
  const [presencial, setPresencial] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const [ plano, setPlano ] =  React.useState('')
  const [ inscricao, setInscricao ] =  React.useState('')
  const { onLogin, onRegister, authState } = useAuth()
  console.log('AUTH_STATE_LOGIN_SCREEN: ', authState)

  React.useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(`${API_URL}/products`)
    }
    testCall()
  }, [])

  const { onLogout } = useAuth()


  const login = async () => {
    const result = await onLogin(email, password)

    if (result && result.error) {
      alert(result.msg)
    }
  }

  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 12, backgroundColor: '#23272A' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginBottom: 12 }}>
          <MaterialCommunityIcons name="clock-edit-outline" color='#00C975' size={26} />
          <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 24, fontWeight: 400 }}>AGENDAR CONSULTA</Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setSelected}
            data={data}
            placeholder='Especialidade'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setSelected}
            data={data}
            placeholder='Médico(a)'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setSelected}
            data={data}
            placeholder='Data'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setSelected}
            data={data}
            placeholder='Local'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setSelected}
            data={data}
            placeholder='Convênio'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            status={teleconsulta ? 'checked' : 'unchecked'}
            onPress={() => {
              setPresencial(false);
              setTeleconsulta(!teleconsulta);
            }}
          />
          <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 16, fontWeight: 400 }}>TELECONSULTA</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <Checkbox
            status={presencial ? 'checked' : 'unchecked'}
            onPress={() => {
              setTeleconsulta(false);
              setPresencial(!presencial);
            }}
          />
          <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 16, fontWeight: 400 }}>PRESENCIAL</Text>
        </View>
      </View>
        <View style={{ marginBottom: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={styles.input}
            value={plano}
            label="Plano"
            onChangeText={(text) => setPlano(text)}
          />
          <TextInput
            style={styles.input}
            value={inscricao}
            label="Inscricao"
            onChangeText={(text) => setInscricao(text)}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            status={acceptTerms ? 'checked' : 'unchecked'}
            onPress={() => {
              setAcceptTerms(!acceptTerms);
            }}
          />
          <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 16, fontWeight: 400 }}>ESTOU CIENTE DOS TERMOS DE USO</Text>
        </View>
        <View style={{ display: 'flex', alignItems: 'flex-end', paddingVertical: 16 }}>
          <Button
            mode="contained"
            buttonColor='#00DE81'
            textColor='#23272A'
            uppercase
            disabled={!acceptTerms}
            style={{ borderRadius: 8, width: '100%' }}
            labelStyle={{ fontWeight: 400 }}
            onPress={() => console.log('Pressed')}>
            AGENDAR
          </Button>
        </View>
      </View>
    </>
  );
}
