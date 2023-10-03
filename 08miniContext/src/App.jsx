import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
