import { useState } from 'react'
import './Country.css'
import CountriDetails from './CountriDetails'
export default function Country({country,handleMarkCountries}) {
    const [visitedCountry, setVisited] = useState(false)
    const handleButton = ()=>{
        setVisited(!visitedCountry)
    }
    const visited = {
        margin: '10px',
        background: 'peru',
        border: 'none',
        color: 'purple',
        fontSize: '20px',
        padding: '10px 15px',
        borderRadius: '15px',
        cursor: 'pointer',
       
    }
  
    const {name, flags} = country
  return (
    <div className={`country ${visitedCountry? 'green': 'tomato'}`}>
      <h1 style={{color: visitedCountry? 'yellow': 'blue',fontSize: visitedCountry? '10px': '20px'}}>name:{name.common}</h1>
      <img style={{width :'300px', height:'200px', objectFit:'cover'}} src={flags.png} alt="" />
      <button onClick={()=>handleMarkCountries(country)}>Mark as</button>
      <button onClick={handleButton}  style={visited}>{visitedCountry ? 'Visited':'not Visited'}</button>
      {visitedCountry ? ' I have Visited ': 'Not yet'}
      <hr />
      <CountriDetails 
      country= {country} 
      handleMarkCountries={handleMarkCountries} >
        
      </CountriDetails>
    </div>
  )
}
