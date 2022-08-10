import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/routes/StackNavigator';
import { MenuLateralBasico } from './src/routes/MenuLateralBasico';
import { MenuLateral } from './src/routes/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}:any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default App;