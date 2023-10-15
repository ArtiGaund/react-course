
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  // const [ products, error, loading ]=customReactQuery('/api/products')

  const [ products, setProducts ] =useState([]);
  // error should be kept in states
  const [ error, setError ] = useState(false);

  // loading case
  const [ loading, setLoading ] = useState(false);
  // for search
  const [ search, setSearch ] = useState('')

  useEffect(()=> {
    // AbortController() cancel old request by it own
    const controller = new AbortController()
    // it will show in inspect, it has delay of 3 sec to show the loading
    // but it will not show in web browser bz we are not updating in state
    ;( async() => {
     try {
      setLoading(true)
      setError(false)
      // changing '/api/products' to urlPath (giving name)
       const response = await axios.get('/api/products?search=' + search, {
        signal: controller.signal
       })
       console.log(response.data);
       // if used setProducts here it will show update in browser after 3 sec
       setProducts(response.data);
       setLoading(false)
     } catch (error) {
      if(axios.isCancel(error))
      {
        console.log('Request Canceled', error.message)
        return
      }
      setError(true)
      setLoading(false)
     }
    })()
    // cleanup method (when component is mount, it unmounted also)
    return () => {
      controller.abort()
    }

  }, [ search ])

  // showing user that there is an error
  // if( error ){
  //   return<h1>Something went wrong.</h1>
  // }
  // if(loading){
  //   return<h1>Loading...</h1>
  // }
  return (
    <>
      <h1>Api handling</h1>
      {/* using input field to search for data in api */}
      <input type='text' placeholder='Search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      {/* conditional rendering */}
      { loading && <h1>Loading...</h1>}
      { error && <h1>Something went wrong</h1>}
      <h2>Numbers of Products are: {products.length}</h2>
    </>
  )
}

export default App


// creating separated hook for all states and useEffect, (generic function)
// const customReactQuery = ( urlPath ) => {
  
// all states and useEffect
//   return [
//     products,
//     error,
//     loading
//   ]

// }