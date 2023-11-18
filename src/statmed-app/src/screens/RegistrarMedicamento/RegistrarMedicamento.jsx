import * as React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../../context/AuthContext';
import { SelectList, MultipleSelectList }from 'react-native-dropdown-select-list'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import diasData from './assets/data/dias.json'
import medicamentosData from './assets/data/medicamentos.json'

export default function RegistrarMedicamento() {
  const { onMedicamentos } = useAuth()

  const [ medicamentos, setMedicamentos ] = React.useState("");
  const [horario, setHorario] = React.useState("");
  const [periodo, setPeriodo] = React.useState([]);

  const agendar = async () => {
    const id = sessionStorage.getItem('userid')
    const medicamentosData = {
      pacienteId: id,
      horario: horario,
      periodo: periodo,
      medicamentos: medicamentos,
    }
    const result = await onMedicamentos(medicamentosData)

    if (result && result.error) {
      alert(result.msg)
    }
  }

  return (
    <>
      <View style={{ flex: 1, paddingHorizontal: 30, paddingTop: 12, backgroundColor: '#23272A' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginBottom: 12 }}>
          <MaterialCommunityIcons name="clock-edit-outline" color='#00C975' size={26} />
          <Text style={{ color: '#FFF', marginLeft: 8, fontSize: 24, fontWeight: 400 }}>REGISTRAR MEDICAMENTO</Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setMedicamentos}
            data={medicamentosData}
            placeholder='Medicamento'
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
            searchPlaceholder='buscar'
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <MultipleSelectList 
            setSelected={(val) => setPeriodo(val)} 
            data={diasData} 
            save="value"
            label="Periodo"
            boxStyles={{ height: 48, backgroundColor: '#FFF' }}
            inputStyles={{ fontSize: 16, fontWeight: 600 }}
            dropdownStyles={{ backgroundColor: '#FFF' }}
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <SelectList
            setSelected={setHorario}
            data={[
              { key: 'manhã', value: 'manhã' },
              { key: 'tarde', value: 'tarde' },
              { key: 'noite', value: 'noite' },
            ]}
            placeholder='Horário'
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
            onPress={agendar}
          >
            CONTINUAR
          </Button>
        </View>
      </View>
    </>
  );
}
