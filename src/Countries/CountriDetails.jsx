import CountryData from "./CountryData";

export default function CountriDetails({country, handleMarkCountries}) {
  return (
    <div>
        <CountryData 
        country={country} 
        handleMarkCountries={handleMarkCountries}>

        </CountryData>
    </div>
  )
}
