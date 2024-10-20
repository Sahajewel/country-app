export default function CountryData({country}) {
  return (
    <div>
      <h5>Country Name: {country.capital}</h5>
      <h5>Country Name: {country.name.common}</h5>
    </div>
  )
}
