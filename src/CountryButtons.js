import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Attractions from './Attractions';
import ChooseCountry from './ChooseCounty';


function CountryButtons({chosenCountry}) {
    console.log(chosenCountry)
    return (
      
        <Router>
    <nav>
    <Link to ="/" className='link'>See all</Link>
      <Link to ="/russia" className='link'>Russia</Link>
      <Link to ="/france" className='link'>France</Link>
      <Link to ="/germany" className='link'>Germany</Link>
    </nav>
    <Routes>
    <Route path="/" element={<ChooseCountry/>}/>
      <Route path="/russia" element={<Attractions countryId={chosenCountry}/>}/>
      <Route path="/france" element={<Attractions countryId={chosenCountry}/>}/>
      <Route path="/germany" element={<Attractions countryId={chosenCountry}/>}/>
    </Routes>
  </Router>
  
    )

}

export default CountryButtons;