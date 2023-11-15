import * as React from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Appbar } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import data from './assets/data/data.json'
const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
import ManoelGomesInfoConsulta from '../../../assets/manoel-gomes-info-consulta.png'

export default function InfoConsulta() {
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
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginBottom: 12 }}>
            <View style={{ borderColor: '#36393E', borderWidth: 1, borderRadius: 6, width: '100%' }}>
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#36393E', borderWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}>
                <Text style={{ fontSize: 16, lineHeight: 20, color: '#DCDCDC', fontWeight: 600, paddingVertical: 8 }}>INFORMAÇÕES DA CONSULTA</Text>
              </View>
              <View style={{ display: 'flex', padding: 16 }}>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 16 }}>
                  <View style={{ display: 'flex' }}>
                    <Image
                      style={{
                        width: 86,
                        height: 86,
                        borderRadius: 64
                      }}
                      source={ManoelGomesInfoConsulta}
                    />
                  </View>
                  <View style={{ marginLeft: 16 }}>
                    <View style={{ display: 'flex', marginBottom: 16 }}>
                      <Text style={{ fontSize: 16, lineHeight: 20, color: '#DCDCDC', fontWeight: 600 }}>MEDICO</Text>
                      <Text style={{ fontSize: 12, lineHeight: 20, color: '#DCDCDC' }}>Dr. Manoel Gomes</Text>
                    </View>
                    <View style={{ display: 'flex' }}>
                      <Text style={{ fontSize: 16, lineHeight: 20, color: '#DCDCDC', fontWeight: 600 }}>ESPECIALIDADE</Text>
                      <Text style={{ fontSize: 12, lineHeight: 20, color: '#DCDCDC' }}>Psiquiatria</Text>
                    </View>
                  </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <View>
                    <View style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                      <Text style={{ fontSize: 16, lineHeight: 20, color: '#DCDCDC', fontWeight: 600 }}>DATA</Text>
                      <Text style={{ fontSize: 12, lineHeight: 20, color: '#DCDCDC' }}>24/08/23</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 16 }}>
                    <View style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                      <Text style={{ fontSize: 16, lineHeight: 20, color: '#DCDCDC', fontWeight: 600 }}>ATESTADO</Text>
                      <Text style={{ fontSize: 12, lineHeight: 20, color: '#DCDCDC' }}>Sim</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 16 }}>
                    <View style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                      <Text style={{ fontSize: 16, lineHeight: 20, color: '#DCDCDC', fontWeight: 600 }}>ENCAMINHAMENTO</Text>
                      <Text style={{ fontSize: 12, lineHeight: 20, color: '#DCDCDC' }}>Não</Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 32 }}>
                  <View>
                    <View style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                      <Text style={{ fontSize: 16, lineHeight: 20, color: '#DCDCDC', fontWeight: 600 }}>ATENÇÃO</Text>
                      <Text style={{ fontSize: 12, lineHeight: 20, color: '#DCDCDC' }}>Para informações sobre a consulta ou diagnósticos para fins legais ou próprios solicite a cópia do prontuário presencialmente com sua documentação em mão. Em caso de impossibilidade de sua presença é necessário uma procuração para terceiros.</Text>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 32 }}>
                  <View>
                    <View style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                      <Text style={{ fontSize: 10, lineHeight: 12, color: '#DCDCDC', fontWeight: 400 }}>Conforme a Lei 13709/2018 - Lei Geral de Proteção de Dados (LGPD) seus dados serão tratados com extrema privacidade e com zelo contra acesso de terceiros.</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
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