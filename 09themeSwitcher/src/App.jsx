
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {
  const [ themeMode, setThemeMode] = useState("light")

  //defining fuction lightTheme and darkTheme which we have initialize in theme.js
  const lightTheme =() => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme is done by classic js (this work is done on client side)
  useEffect(() =>{
    // removing it because we have to add value
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode  ])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />  
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
      </ThemeProvider>
  )
}

export default App
