import * as React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { SelectList } from 'react-native-dropdown-select-list'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import alergiasData from './assets/data/alergias.json'
export default function RegistrarAlergia() {
  const { onAlergias } = useAuth()

  const [ alergia, setAlergia ] = React.useState("");

  const alergiaSend = async () => {
    const id = sessionStorage.getItem('userid')
    const alergiaData = {
      pacienteId: id,
      alergia: alergia,
    }
    const result = await onAlergias(alergiaData)

    if (result && result.error) {
      alert(result.msg)
    }
  }

  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 12, backgroundColor: '#23272A' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginBottom: 12 }}>
          <MaterialCommunityIcons name="clock-edit-outline" color='#00C975' size={26} />
          <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 24, fontWeight: 400 }}>REGISTRAR ALERGIA</Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setAlergia}
            data={alergiasData}
            placeholder='Alergia'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View>
      </View>
        <View style={{ display: 'flex', alignItems: 'flex-end', paddingVertical: 16 }}>
          <Button
            mode="contained"
            buttonColor='#00DE81'
            textColor='#23272A'
            uppercase
            style={{ borderRadius: 8, width: '100%' }}
            labelStyle={{ fontWeight: 400 }}
            onPress={alergiaSend}
          >
            CONTINUAR
          </Button>
        </View>
      </View>
    </>
  );
}
