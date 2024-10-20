import { useEffect, useState } from "react";
import Country from "./Country";


export default function Countries() {
    const [countries, setCountries] = useState([])
    const [markCountries, setMarkCountries] = useState([])
   
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then((data)=> setCountries(data))
        
    }, [])

    const handleMarkCountries = country=>{
        console.log("visited");
       const newVisitiredCountries = [...markCountries, country]
       setMarkCountries(newVisitiredCountries)
}
   
  return (
    <div>
        <h1>countries:{countries.length}</h1>
        <div>
            <h5>Visited Countries: {markCountries.length}</h5>
            <ul style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
           
            {
                markCountries.map(country=><li style={{width: '300px',height:'200px', overflow:'hidden',objectFit:'cover'}}  key={country.cca3} ><img style={{width:'full', height:'full'}} src={country.flags.png} alt="" /></li>)
               }
          
            </ul>
        </div>
       <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
       {
            countries.map(country=><Country
                 key={country.cca3} 
                 country={country}
                 handleMarkCountries={handleMarkCountries}></Country>)

               
        }
       </div>
    </div>
  )
}
