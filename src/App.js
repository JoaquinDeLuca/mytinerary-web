import './App.css';
// importo las dos paginas new

import Home from './pages/Home';
import Cities from './pages/Cities';
import UnderConstruction from './pages/UnderConstruction';
import NewCity from './pages/NewCity';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WebsiteLayouts from './layouts/WebsiteLayouts';
import ScrollToTop from './components/ScrollToTop';
import EditCity from './pages/EditCity';
import City from './pages/City'
import MyTineraries from './pages/MyTineraries'
import Singup from './pages/Singup';
import SingIn from './pages/SingIn';
import EditInerary from './pages/EditInerary';
import NewAdmin from './pages/NewAdmin';
import { useEffect, useState } from 'react';
import { useGetUserIdMutation } from './features/userApi';


function App() {

  const [logged, setLogged] = useState()
  const [dataUser] = useGetUserIdMutation()


  console.log(logged)
  let user = JSON.parse(localStorage.getItem('useriInfo'))
  
  useEffect(()=>{
    if(user){
      dataUser(user.id)
      .then(response => setLogged(response.data.response.logged))
    }else {
      setLogged(false)
    }
  },[])


  return (
    <BrowserRouter>
    <ScrollToTop />
      <WebsiteLayouts>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singup' element={logged ? <Home/> : <Singup />} />
        <Route path='/singin' element={logged ? <Home/> : <SingIn />}/>
        <Route path='/newadmin' element={logged && user.role === 'admin' ? <NewAdmin /> : <Home/>}/>
        <Route path='/itineraries/:id' element={<EditInerary/> }/>
        {/* <Route path='*' element={<UnderConstruction />} /> */}
        <Route path='/cities' element={<Cities/>} />
        <Route path='/city/:id'   element={<City/>}/>
        <Route path='/newcity' element={<NewCity />} />
        <Route path='/editcity/:id' element={logged === false ? <Singup/>  :<EditCity /> } />
        <Route path='/mytineraries' element={<MyTineraries/>}/>
        <Route path='/newitinerary'  element={<UnderConstruction/>}/>
      </Routes>
      </WebsiteLayouts>
    </BrowserRouter>
  );
}

export default App;
