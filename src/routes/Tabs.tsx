import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../themes/appTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
interface TabsProps{
    focused: boolean;
    color: string;
    size: number;
}

export const Tabs = () => {
   return Platform.OS === 'ios' ? <TabsIos /> : <TabAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={true}
        barStyle={{
            backgroundColor: colores.primary
        }}
        screenOptions={({route}) =>({
            tabBarIcon:({color}) => {
                let iconName:string;
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'barbell-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'balloon-outline'
                        break;
                    case 'StackNavigator':
                        iconName = 'car-outline'
                        break;
                
                    default:
                        iconName = 'barcode-sharp';
                        break;
                }
                return <Icon name={iconName} size={20} color="#fff" />
            }
        })}
    >
      <BottomTabIos.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{title: 'TopTabNavigator'}} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIos = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottomTabIos.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={({route}) =>({
            tabBarActiveTintColor:colores.primary,
            tabBarStyle:{
                borderTopColor:colores.primary,
                /* borderTopWidth:1 */
                shadowColor:'transparent'
            },
            tabBarLabelStyle:{
                fontSize:20
            },
            tabBarIcon:({color}) => {
                let iconName:string;
                switch (route.name) {
                    case 'Tab1Screen':
                        iconName = 'barbell-outline';
                        break;
                    case 'Tab2Screen':
                        iconName = 'balloon-outline'
                        break;
                    case 'StackNavigator':
                        iconName = 'car-outline'
                        break;
                
                    default:
                        iconName = 'barcode-sharp';
                        break;
                }
                return <Icon name={iconName} size={20} color="#fff" />
            }
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon: (props) => IconTab1({...props})}} component={Tab1Screen} /> */}
      <BottomTabIos.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{title: 'TopTabNavigator'}} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{title:'Stack'}} component={StackNavigator} />
    </BottomTabIos.Navigator>
  );
}

const IconTab1 = (props:TabsProps) => {
    return(
        <Text style={{color:props.color}}>T1</Text>
    );
}
