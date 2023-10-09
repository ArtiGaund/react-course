
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// we need auth Service
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  // we need loading state when we fetch data from application so it will take some time for that network request
  // so when we need to ask something from database or network, its good to create loading state, we can do conditional
  // rendering
  const [ loading, setLoading ] = useState(true)
  // we need dispatch, to bring curUser, bz we need to change state
  const dispatch = useDispatch(); 
  // when this application will be loaded, then use useEffect and ask this service whether we are login or not
  useEffect(() => {
    // ask auth service how is current user, whole time our state will remain updated whether you will get current 
    // user or user state will show you are logout
    authService.getCurrentUser()
    .then((userData) => {
       if(userData){
        dispatch(login({userData}))
       } else{
        dispatch(logout())
       }
    })
    .finally(() => setLoading(false))
  },[]) 
  // finally will always run whether then works or not, setLoading is used in finally to show loading work is done
  // now conditional rendering is done in
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        {/* TODO:   */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
