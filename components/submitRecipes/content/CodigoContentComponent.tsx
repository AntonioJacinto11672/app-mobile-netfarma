import { View, Text } from 'react-native'
import React from 'react'
import InputWhithLabel from '@/components/_forms/InputWhithLabel'

export default function CodigoContentComponent() {
  return (
    <View>
      <InputWhithLabel label='Nº Receita Medica' placeholder='301100006526541328'/>
      <InputWhithLabel label='Código de Acesso a Dispensa' placeholder='472614'/>
      <InputWhithLabel label='Código de Direito de Operação' placeholder='1196'/>
      <InputWhithLabel label='Informações adicionais/preferências' placeholder=''/>
      
    </View>
  )
}