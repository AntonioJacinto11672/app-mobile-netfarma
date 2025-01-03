import { View, Text, TextInput } from 'react-native'
import React from 'react'
import IconVectorComponent, { IconType } from '../IconVectorComponent'
import MenuUploadFile from '../ui/MenuUploadFile'
import InputWhithLabel from '../_forms/InputWhithLabel'

const CompartipactionSystemTrue = () => {
  const [hiddenMenu, setHiddenMenu] = React.useState(false)

  const toggleMenu = () => {
    setHiddenMenu(!hiddenMenu)
  }
  return (
    <View>
      <View>
        <Text className='my-4 '>Informações adicionais/prefências  </Text>
        <View className='flex-row items-center'>

          <TextInput readOnly keyboardType='url' placeholder='procurar...' className='w-full border rounded-md outline-none border-gray-300 placeholder:text-gray-400 p-3' onPress={toggleMenu} />

          <View className='-left-10'>
            <IconVectorComponent icon={{
              value: {
                type: IconType.FeatherIcon,
                name: "folder-plus"
              },
              color: "gray",
              size: 22

            }} />


          </View>
        </View>
        {/* Menu quando clicarem no input */}
        {hiddenMenu && <MenuUploadFile />}
       

      </View>
    </View>
  )
}

export default CompartipactionSystemTrue