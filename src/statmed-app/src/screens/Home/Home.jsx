import * as React from 'react';
import { Text } from 'react-native-paper';
import { View, ScrollView, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ComunicadoHospitalar from '../../../assets/comunicado-hospitalar.png'
import { Appbar } from 'react-native-paper';

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Inicio" />
        </Appbar.Header>
        <View style={{ backgroundColor: '#23272A', width: '100%', minHeight: 200, padding: 24, marginBottom: 8 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <MaterialCommunityIcons name="alarm-plus" color='#00C975' size={26} />
            <Text style={{ color: '#FFF', marginLeft: 8 }}>Minhas consultas</Text>
          </View>
          <View>
            <Text style={{ color: '#DCDCDC' }}>Sem Horarios!</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#23272A', width: '100%', minHeight: 200, padding: 24 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <MaterialCommunityIcons name="clipboard-alert" color='#00C975' size={26} />
            <Text style={{ color: '#FFF', marginLeft: 8 }}>Comunicado Hospitalar</Text>
          </View>
          <View>
            <Image
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain'
              }}
              source={ComunicadoHospitalar}
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <Text style={{ color: '#DCDCDC' }}>Hoje é o dia mundial do autismo! Celebrado anualmente em 2 de abril, foi criado pela Organização das Nações Unidas em 18 de dezembro de 2007 para a conscientização acerca dessa questão.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
