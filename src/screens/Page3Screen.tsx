import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

interface Props extends StackScreenProps<any,any>{};
export const Page3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page3Screen</Text>

        <Button 
          title='Regresar'
          onPress={()=> navigation.pop()}/>

        <Button 
          title='Ir a pagina 1'
          onPress={()=> navigation.popToTop()}/>
    </View>
  )
}
