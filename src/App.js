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

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <WebsiteLayouts>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singup' element={<Singup />} />
        <Route path='/singin' element={<SingIn />}/>
        <Route path='/itineraries/:id' element={<EditInerary/> }/>
        {/* <Route path='*' element={<UnderConstruction />} /> */}
        <Route path='/cities' element={<Cities/>} />
        <Route path='/city/:id'   element={<City/>}/>
        <Route path='/newcity' element={<NewCity />} />
        <Route path='/editcity/:id' element={<EditCity />} />
        <Route path='/mytineraries' element={<MyTineraries/>}/>
      </Routes>
      </WebsiteLayouts>
    </BrowserRouter>
  );
}

export default App;
