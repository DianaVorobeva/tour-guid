import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import ChooseCountry from './ChooseCounty';
import Attractions from './Attractions';
import { data } from './data';

function App() {
  const [country, setCountry] = useState(0);
  const {id,countryName,image} = data[country];
  return(
    
    <div className=''>
         <div className='container'>
        <h1>Tourist attractions around the world!</h1>
        </div>

        <div className='container'>
        <Router>
            <nav>
              <Link to ="/" className='link'>Home</Link>
              <Link to ="/attractions" className='link'>View attractions in {countryName}</Link>
             </nav>
             
              <Routes>
                <Route path="/attractions" element={<Attractions country={country} countryName={countryName}/>}/>
             </Routes>
             </Router>
        </div>

        <div className='container'>
          <ChooseCountry countryName={countryName} id={id} image={image} setCountry= {setCountry}/>
        </div>
     
     
</div>
  )
}

export default App;
