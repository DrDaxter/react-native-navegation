import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
import { styles } from '../themes/appTheme'

export const Tab1Screen = () => {
  
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Tab 1 Screen</Text>
        
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <TouchableIcon iconName='airplane-outline'/>
          <TouchableIcon iconName='bicycle-outline'/>
          <TouchableIcon iconName='boat-outline'/>
          <TouchableIcon iconName='bluetooth-outline'/>
          <TouchableIcon iconName='body-outline'/>
          <TouchableIcon iconName='cart-outline'/>
          <TouchableIcon iconName='cloud-outline'/>
          <TouchableIcon iconName='flame-outline'/>
        </View>

    </View>
  )
}
