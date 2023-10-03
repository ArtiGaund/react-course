import { createContext, useContext } from "react";
// in previous project we didnt added default value in createContext, but here we can add default value, 
//but work of both are same (adding value in initial state)
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () => {},
})
 
// adding provider here onlye
export const ThemeProvider = ThemeContext.Provider

// creating custom hooks
export default function useTheme(){
    return useContext(ThemeContext)
}