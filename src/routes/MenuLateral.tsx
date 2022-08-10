import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();
//const Stack = createStackNavigator();

/* const SettingsStackScreen = ()=> {
  return(
    <Stack.Navigator>
      <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
    </Stack.Navigator>
  );
} */

export const MenuLateral = () => {

    const {width, height} = useWindowDimensions();
  return (
    <Drawer.Navigator 
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front'
        }}
        drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}:DrawerContentComponentProps) => {

  return(
    <DrawerContentScrollView>
      <View style={styles.avatarContent}>
        <Image 
          source={{
            uri: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity
          onPress={()=> navigation.navigate('Tabs')} 
          style={styles.menuBoton}
          >
          <Icon name="earth" size={20} color="#000" />
          <Text style={styles.menuTexto}>Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=> navigation.navigate('SettingsScreen')} 
          style={styles.menuBoton}
          >
            <Icon name="settings" size={20} color="#000" />
          <Text style={styles.menuTexto}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}