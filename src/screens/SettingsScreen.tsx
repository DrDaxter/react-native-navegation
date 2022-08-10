import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import { colores, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext)
  const insets = useSafeAreaInsets();
  return (
    <View style={{
        ...styles.globalMargin,
        marginTop:insets.top + 20
      }}>
        <Text style={styles.title}>Setting Screen</Text>

        <Text>
          {JSON.stringify(authState,null,4)}
        </Text>

        {
          authState.favoriteIcon && (
            <Icon name={authState.favoriteIcon} size={50} 
              color={colores.primary} />
          )
        }
       
    </View>
  )
}
