import React ,{ createContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer";

export interface AuthState{
    isLoggedIn:boolean,
    username?:string,
    favoriteIcon?:string
}

//estado inicial
export const authInitialState: AuthState = {
    isLoggedIn:false,
    username:undefined,
    favoriteIcon:undefined
}

export interface AuthContextProps{
    authState:AuthState;
    signIn: ()=>void;
    logout: ()=>void;
    changeFavIcon: (iconName:string)=>void;
    changeUserName: (userName:string)=>void;
}

//crear contexto
export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}:any) => {
    //     el state   ejecuta acciones       valor ini    reducer que retorna nuevo state
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);
    const signIn = () => {
        dispatch({type:'signIn'});
    }

    const logout = () => {
        dispatch({type:'logout'});
    }

    const changeFavIcon = (iconName:string) =>{
        dispatch({type:'changeFavIcon',payload:iconName})
    }

    const changeUserName = (userName:string) => {
        dispatch({type:'changerUserName',payload:userName})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavIcon,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}