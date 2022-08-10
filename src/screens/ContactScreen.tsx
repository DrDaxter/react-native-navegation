import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { Text } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../themes/appTheme'

export const ContactScreen = () => {
  const {authState,signIn} = useContext(AuthContext)

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Contact Screen</Text>

        {
          !authState.isLoggedIn 
          ?<Button title='Sign In' onPress={signIn} />
          :null
        }
    </View>
  )
}
