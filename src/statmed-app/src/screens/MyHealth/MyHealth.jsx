import * as React from 'react';
import { Button } from 'react-native-paper';
import { View, ScrollView, Image, Dimensions, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { DataTable } from 'react-native-paper';
import data from './assets/data/data.json'
const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
import { checkIndexIsEven } from '../../utils';
export default function MyHealth() {
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
            <MaterialCommunityIcons name="pill" color='#00C975' size={26} />
            <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 24, fontWeight: 400 }}>MINHA SAÚDE</Text>
          </View>

          <DataTable style={table.container}> 
            <DataTable.Header style={table.tableHeader}>
              <DataTable.Title textStyle={{color: '#DCDCDC', fontWeight: 700}} style={[{ justifyContent: 'center' }, table.tableTitle]}>MINHAS MEDICAÇÕES</DataTable.Title>
            </DataTable.Header>
            {data.map(( history, index ) => (
              <DataTable.Row style={[{ backgroundColor: checkIndexIsEven(index) ? '#36393E80' : '' },table.tableRow]}> 
                <DataTable.Cell textStyle={{color: '#DCDCDC'}} style={{ marginHorizontal: 8 }}>Calcitran <Text style={table.pillDays}>DIÁRIO</Text> <Text style={table.pillHour}>MANHÃ</Text></DataTable.Cell>
              </DataTable.Row> 
            ))}
          </DataTable>
          <View style={{ display: 'flex', alignItems: 'flex-end', paddingVertical: 16 }}>
            <Button
              mode="contained"
              buttonColor='#00DE81'
              textColor='#23272A'
              uppercase
              style={{ width: 100, borderRadius: 8 }}
              labelStyle={{ fontWeight: 400 }}
              onPress={() => console.log('Pressed')}>
              NOVO
            </Button>
          </View>
          <DataTable style={table.container}> 
            <DataTable.Header style={table.tableHeader}>
              <DataTable.Title textStyle={{color: '#DCDCDC', fontWeight: 700}} style={[{ justifyContent: 'center' }, table.tableTitle]}>ALERGIAS</DataTable.Title>
            </DataTable.Header>
            {data.map(( history, index ) => (
              <DataTable.Row style={[{ backgroundColor: checkIndexIsEven(index) ? '#36393E80' : '' },table.tableRow]}> 
                <DataTable.Cell textStyle={{color: '#DCDCDC'}} style={{ marginHorizontal: 8 }}></DataTable.Cell>
              </DataTable.Row> 
            ))}
          </DataTable>
          <View style={{ display: 'flex', alignItems: 'flex-end', paddingVertical: 16 }}>
            <Button
              mode="contained"
              buttonColor='#00DE81'
              textColor='#23272A'
              uppercase
              style={{ width: 100, borderRadius: 8 }}
              labelStyle={{ fontWeight: 400 }}
              onPress={() => console.log('Pressed')}>
              NOVO
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