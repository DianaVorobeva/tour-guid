import './App.css';
import { useState } from 'react';
import ChooseCountry from './ChooseCounty';
import Attractions from './Attractions';
import { data } from './data';

function App() {
  const [country, setCountry] = useState(0);
  const {id,countryName,image} = data[country];
  const [showComponent, setShowComponent] = useState(true);
  return(
    
    <div className='container'>
      {showComponent ? <ChooseCountry countryName={countryName} id={id} image={image} setCountry= {setCountry} showComponent={showComponent} setShowComponent={setShowComponent}/> : <Attractions country={country} countryName={countryName}/>}
     
     
</div>
  )
}

export default App;
