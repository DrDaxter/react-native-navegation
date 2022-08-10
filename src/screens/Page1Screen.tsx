import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/Ionicons'
import { styles } from '../themes/appTheme'

interface Props extends StackScreenProps<any,any>{};
export const Page1Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page1Screen</Text>

        <Button 
          title='Nevegar' 
          onPress={()=> navigation.navigate('Page2Screen')}/>

        <Text style={styles.title}>Navegar con argumentos</Text>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{
              ...styles.botonGrande,
              backgroundColor:'green'
            }}
            onPress={()=> navigation.navigate('PersonaScreen',{
              id:1,
              nombre:'Pedro'
            })}
            >
            <Icon name="male" size={20} color="#fff" />
            <Text style={styles.subTitle}>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.botonGrande,
              backgroundColor:'gray'
            }}
            onPress={()=> navigation.navigate('PersonaScreen',{
              id:1,
              nombre:'Maria'
            })}
            >
              <Icon name="female" size={20} color="#fff" />
            <Text style={styles.subTitle}>Maria</Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}
