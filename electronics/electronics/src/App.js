
import './App.css';
import './Style.css'
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Mens from './Mens';
import Womens from './Womens';
import Jewelery from './Jewelery';
import Electronics from './Electronics';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import Storedetails from './Storedetails';
export const NewContext = createContext()
function App() {
const [storedata, setStoredata] = useState([])
  useEffect(() => {
   axios.get("https://fakestoreapi.com/products").then((response)=>{
     console.log('store',response.data);
     setStoredata(response.data)
   })
  
  }, [])
  
  return (
    <BrowserRouter>
    <div>
    <Header/>
    </div>
    <NewContext.Provider value={{storedata:storedata}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mens" element={<Mens/> }/>
      <Route path="/womens" element={<Womens />}/>
      <Route path="/jewelery" element={<Jewelery />}/>
      <Route path="/electronics" element={<Electronics/>}/>
      <Route path="storedetails/:id" element={<Storedetails/>}/>
    </Routes>
    </NewContext.Provider>
    </BrowserRouter>
  );
}

export default App;
