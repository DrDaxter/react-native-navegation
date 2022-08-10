import { CommonActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

export const Page2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title:'Hola mundo',
      headerBackTitle:'Regresar'
    });
  }, [])
  

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Page2Screen</Text>

        <Button 
          title='Ir pagina 3'
          onPress={()=> {
            navigator.dispatch(CommonActions.navigate({name:'Page3Screen',}))
          } }
        />
    </View>
  )
}
