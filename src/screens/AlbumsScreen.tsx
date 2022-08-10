import React, { useContext } from 'react'
import { View, Button, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme';

export const AlbumsScreen = () => {
  const {authState,logout} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Albums Screen</Text>

      {
        authState.isLoggedIn && (
          <Button title='Logout' onPress={logout} />
        )
      }
    </View>
  )
}
