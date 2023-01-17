import { useState } from "react";
import CountryButtons from "./CountryButtons";
import { data } from './data';



function ChooseCountry() {
  const [country, setCountry] = useState(0);
  const {id,countryName,image} = data[country];
  const [clickedId, setClickedId] = useState(data[country].id);


  const prevCountry = (event) => {
    const chosenId = event.target;
    setClickedId(chosenId);
    setCountry(country => {
      country --;
      if(country < 0) {
        return data.length -1
      }
      return country;
    })
  }

  const nextCountry = () => {
    setCountry(country => {
      country++;
      if(country > data.length-1) {
        return country = 0;
      }
      return country
    })
    
  }

  return(

    <div className='wrapper'>
      <div className='container'>
        <CountryButtons chosenCountry={clickedId}/>
      </div>
      <div className='container'>
        <img src={image} alt="country" width="500px"/>
      </div>
      <div className='container'>
          <h2>{id} - {countryName}</h2>
      </div>
      <div className='container btn'> 
          <button onClick={prevCountry} className="changeBtn">Previous</button>
          <button onClick={nextCountry} className="changeBtn">Next</button>
      </div>
     
    </div>
  )
}


export default ChooseCountry;

