import { data } from './data';

function ChooseCountry({countryName,id,image,setCountry,showComponent,setShowComponent}) {
  
  const prevCountry = () => {
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

  const viewAttractions = (e) => {
    e.preventDefault();
    // window.location.assign('http://localhost:3000/attractions');
    
    setShowComponent(!showComponent);

  }

  return(
    <div>
    <div className='wrapper'>
    <div className='container'>
        <h1>Tourist attractions around the world!</h1>
        </div>
      <div className='container'>
        <img src={image} alt="country" width="500px" height="650px"/>
      </div>
      <div className='container'>
          <h2>{id} - {countryName}</h2>
      </div>
      <div className='container btn'> 
          <button onClick={prevCountry} className="changeBtn">Previous</button>
          <button onClick={nextCountry} className="changeBtn">Next</button>
      </div>
      
     
    </div>
    <div className='container'>
    <button onClick={viewAttractions} className="countryBtn">View attractions in {countryName}</button>
  </div>
  </div>
  )
}


export default ChooseCountry;

