import './App.css';
import { useState } from 'react';
import { data } from './data';

function Attractions({country,countryName}) {
const [attract, setAttract] = useState(data[country].places);
const [showText, setShowText] = useState(false);

const removePlace = (id) => {
    let newList = attract.filter((item) => item.id !== id);
    setAttract(newList)
}

const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText);
}

return (
    <div>
        <div className='container'>
            <h1>{attract.length} Best Places to Visit in {countryName} </h1>
        </div>
        {attract.map((item => {
            const {id,attraction, description,city,image,source, showMore} = item;
            return (
                <div key={id}>
                    <div className='container'>
                        <h2>{id} - {attraction}, {city}</h2>
                    </div>
                    <div className='container'>
                        <img src={image} alt= "place" width="600px"/>
                    </div>
                    <div className='container description'>
                        <p>{showMore ? description : description.substring(0,200) + "...."}
                        <button className='showBtn' onClick={()=> showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button></p>
                    </div>
                    <div className='container'>
                        <h4>source: {source}</h4>
                    </div>
                    <div className='container'>
                        <button className='removeBtn' onClick={() => removePlace(id)}>Remove</button>
                    </div>
                </div>
            )
        }))}  
    </div>
)
}

export default Attractions;