import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../routes/StackNavigator'
import { styles } from '../themes/appTheme'

/* interface RouterParams {
    id:number,
    nombre:string
} */
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{};
export const PersonaScreen = ({route,navigation}:Props) => {
  const {authState,changeUserName} = useContext(AuthContext)
   // Tambien se puede -> const params = route.params as RouterParams;
   const params = route.params;

    useEffect(() => {
      navigation.setOptions({
        title:params.nombre
      })
    }, []);

    useEffect(() => {
      if(params.nombre !== authState.username){
        changeUserName(params.nombre);
      }
    }, [])
    

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>{
            JSON.stringify(params,null,3)
        }</Text>
    </View>
  )
}
