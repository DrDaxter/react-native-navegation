import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator 
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor:'white'
      }}
      screenOptions={({route}) => ({
        tabBarPressColor:colores.primary,
        tabBarShowIcon:true,
        tabBarStyle:{
          elevation:0,
          shadowColor:'transparent'
        },
        tabBarIndicatorStyle:{
          backgroundColor:colores.primary
        },
        tabBarIcon:({color}) => {
          let iconName:string;
          switch (route.name) {
              case 'ChatScreen':
                  iconName = 'home-outline';
                  break;
              case 'ContactScreen':
                  iconName = 'business-outline';
                  break;
              case 'AlbumsScreen':
                  iconName = 'cafe-outline';
                  break;
          
              default:
                  iconName = '?';
                  break;
          }
          return <Icon name={iconName} size={20} color="#000" />
        }
      })}
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}
