import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Button, Checkbox } from 'react-native-paper';
import { API_URL, useAuth } from '../../context/AuthContext';
import {SelectList }from 'react-native-dropdown-select-list'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import convenios from './assets/data/convenios.json'
import medicos from './assets/data/medicos.json'
import datas from './assets/data/datas.json'

export default function AgendarConsulta({ navigator }) {
  const [teleconsulta, setTeleconsulta] = React.useState(false);
  const [presencial, setPresencial] = React.useState(false);
  const [acceptTerms, setAcceptTerms] = React.useState(false);
  const [date, setDate] = React.useState(new Date())
  const [ plano, setPlano ] =  React.useState('')
  const [ inscricao, setInscricao ] =  React.useState('')
  const { authState, onAgendar } = useAuth()
  console.log('AUTH_STATE_LOGIN_SCREEN: ', authState)

  const [medico, setMedico] = React.useState("");
  const [convenio, setConvenio] = React.useState("");
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    console.log('medico: ', medico)
    console.log('convenio: ', convenio)
    console.log('data: ', data)

    const especialidade = medicos.find(( data ) => {
      return data.value === medico 
    })

    console.log('especialidade: ', especialidade)
  }, [medico, convenio, data])

  const agendar = async () => {
    const id = sessionStorage.getItem('userid')
    const dataHorario = data.split(' ')
    const medicoData = medicos.find(( data ) => {
      return data.value === medico
    })
    const consulta = {
      pacienteId: id,
      data: dataHorario[0],
      horario: dataHorario[1],
      medico: medico,
      especialidade: medicoData.especialidade,
      encaminhamento: "Não",
      atestado: "Sim"
    }
    const result = await onAgendar(consulta)

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
            setSelected={setMedico}
            data={medicos}
            placeholder='Médico(a)'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setData}
            data={datas}
            placeholder='Data'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setConvenio}
            data={convenios}
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
            onPress={agendar}
            >
            AGENDAR
          </Button>
        </View>
      </View>
    </>
  );
}
