import * as React from 'react';
import { Button } from 'react-native-paper';
import axios from "axios";
import { View, ScrollView, Image, Dimensions, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { DataTable } from 'react-native-paper';
import { checkIndexIsEven } from '../../utils';

export default function MedicalConsultations({ navigation }) {
  const { onLogout } = useAuth()
  const [ anteriores, setAnteriores ] = React.useState(null)
  const [ proximas, setProximas ] = React.useState(null)

  const screen = Dimensions.get('window')

  const [ userData, setUserData ] = React.useState(null)
  React.useEffect(() => {
    const id = sessionStorage.getItem('userid')

    const testCall = async () => {
      console.log('req')
      const consultaProx = await axios.get(`http://localhost:3000/consultaprox?pacienteId=${id}`)
      const consultaAnt = await axios.get(`http://localhost:3000/consultaant?pacienteId=${id}`)
      setUserData({
        consultaant: consultaAnt.data,
        consultaprox: consultaProx.data
      })
    }
    testCall()
  }, [])

  React.useEffect(() => {
    console.log('CONSULTAS: ', userData)
    if (userData) {
      setAnteriores(userData.consultaant)
      setProximas(userData.consultaprox)
    }
  }, [ userData ])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Inicio" />
          <Appbar.Action icon="logout" onPress={onLogout} />
        </Appbar.Header>
        <View style={{ backgroundColor: '#23272A', width: '100%', minHeight: screen.height, padding: 24 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginBottom: 12 }}>
            <MaterialCommunityIcons name="clock-edit-outline" color='#00C975' size={26} />
            <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 24, fontWeight: 400 }}>CONSULTAS</Text>
          </View>

          <DataTable style={[{ marginBottom: 24 }, table.container]}> 
            <DataTable.Header style={table.tableHeader}>
              <DataTable.Title textStyle={{color: '#DCDCDC', fontWeight: 700}} style={[{ justifyContent: 'center' }, table.tableTitle]}>PRÓXIMAS</DataTable.Title>
            </DataTable.Header>
            {proximas && proximas.map(( consulta, index ) => (
              <DataTable.Row
                style={[{ backgroundColor: checkIndexIsEven(index) ? '#36393E80' : '' },table.tableRow]}
                onPress={() => {
                  navigation.navigate('Informações Consulta', { consulta })
                }}
              >
                <DataTable.Cell textStyle={{color: '#DCDCDC'}} style={{ marginHorizontal: 8 }}>{consulta.especialidade} <Text style={table.pillDays}>{consulta.data}</Text> <Text style={[ {marginLeft: 8 } ,table.pillDays]}>{consulta.horario}</Text></DataTable.Cell>
              </DataTable.Row> 
            ))}
          </DataTable>

          <DataTable style={table.container}> 
            <DataTable.Header style={table.tableHeader}>
              <DataTable.Title textStyle={{color: '#DCDCDC', fontWeight: 700}} style={[{ justifyContent: 'center' }, table.tableTitle]}>ANTERIORES</DataTable.Title>
            </DataTable.Header>
            {anteriores && anteriores.map(( consulta, index ) => (
              <DataTable.Row style={[{ backgroundColor: checkIndexIsEven(index) ? '#36393E80' : '' },table.tableRow]}> 
                <DataTable.Cell
                  textStyle={{color: '#DCDCDC'}}
                  style={{ marginHorizontal: 8 }}
                  onPress={() => {
                    navigation.navigate('Informações Consulta', { consulta })
                  }}  
                >{consulta.especialidade} <Text style={table.pillDays}>{consulta.data}</Text> <Text style={[ {marginLeft: 8 } ,table.pillDays]}>{consulta.horario}</Text></DataTable.Cell>
              </DataTable.Row> 
            ))}
          </DataTable>
          <View style={{ display: 'flex', alignItems: 'flex-end', paddingVertical: 16 }}>
            <Button
              mode="contained"
              buttonColor='#00DE81'
              textColor='#23272A'
              uppercase
              style={{ borderRadius: 8, width: '100%' }}
              labelStyle={{ fontWeight: 400 }}
              onPress={() => {
                navigation.navigate('Agendar Consulta')
              }}
            >
              NOVA CONSULTA
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const table = StyleSheet.create({ 
  container: {
    borderColor: '#36393E',
    borderWidth: 1,
    borderRadius: 8
  },
  tableRow: {
    paddingHorizontal: 4,
    borderBottomWidth: 0
  },
  tableHeader: {
    borderColor: '#36393E',
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderBottomWidth: 1
  }, 
  tableTitle: {
    borderRightWidth: 1,
    borderColor: '#36393E',
  },
  pillDays: {
    fontSize: 12,
    fontWeight: 400,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: '#DCDCDC',
    backgroundColor: '#36393E',
    borderRadius: 8
  },
  pillHour: {
    fontSize: 12,
    fontWeight: 400,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: '#23272A',
    backgroundColor: '#00C975',
    borderRadius: 8
  }, 
});