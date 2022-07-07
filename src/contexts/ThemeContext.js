import { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeProvider = ( { children } ) => {
    
    const [theme, setTheme] = useState(true)
    const light= "#e8e8e9"
    const dark= '#282c34'






    const changeTheme=()=>{
        if(theme===light){
            setTheme(dark)
        }else{
            setTheme(light)
        }

    }


  return (
    <themeContext.Provider value={changeTheme}>
        {children}
    </themeContext.Provider>
  )
}

export default themeContext






