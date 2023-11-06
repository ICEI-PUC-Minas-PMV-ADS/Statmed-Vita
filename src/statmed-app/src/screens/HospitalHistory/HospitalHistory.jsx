import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ComunicadoHospitalar from '../../../assets/comunicado-hospitalar.png'
import { Appbar } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { DataTable } from 'react-native-paper';
import data from './assets/data/data.json'
const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
import { checkIndexIsEven } from '../../utils';
export default function HospitalHistory() {
  const { onLogout } = useAuth()

  const screen = Dimensions.get('window')


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
            <MaterialCommunityIcons name="archive-outline" color='#00C975' size={26} />
            <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 24, fontWeight: 400 }}>HISTÓRICO</Text>
          </View>
          <DataTable style={table.container}> 
            <DataTable.Header style={table.tableHeader}>
              <DataTable.Title textStyle={{color: '#DCDCDC', fontWeight: 700}} style={[{ justifyContent: 'center' }, table.tableTitle]}>ESPECIALIDADE</DataTable.Title>
              <DataTable.Title textStyle={{color: '#DCDCDC', fontWeight: 700}} style={[{ justifyContent: 'center' }, table.tableTitle]}>MÉDICO(A)</DataTable.Title>
              <DataTable.Title textStyle={{color: '#DCDCDC', fontWeight: 700}} style={{ justifyContent: 'center' }}>DATA</DataTable.Title>
            </DataTable.Header>
            {data.map(( history, index ) => (
              <DataTable.Row style={[{ backgroundColor: checkIndexIsEven(index) ? '#36393E80' : '' },table.tableRow]}> 
                <DataTable.Cell textStyle={{color: '#DCDCDC'}} style={{ marginHorizontal: 8 }}>{history.area}</DataTable.Cell>
                <DataTable.Cell textStyle={{color: '#DCDCDC'}}>{history.name}</DataTable.Cell>
                <DataTable.Cell textStyle={{color: '#DCDCDC'}} style={{ justifyContent: 'center' }}>{history.data}</DataTable.Cell>
              </DataTable.Row> 
            ))}
          </DataTable>
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
});