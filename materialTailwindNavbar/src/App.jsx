
// import './App.css'
import Header from '../src/components/Header/Header'
import Home from './components/Home'
import bg from '../images/bg.png'
function App() {
  const style = {
    backgroundImage:  `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}
  return (
    <main className='h-screen w-screen' style={style}>
      <Header />
      <Home />
      </main>
  )
}

export default App
