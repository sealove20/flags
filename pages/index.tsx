import * as React from 'react'
import axios from 'axios'
import Card from '@/components/Card'
import Search from '@/components/Search'
interface Country {
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

const Home: React.FunctionComponent = () => {
  const [countries, setCountries] = React.useState<Country[]>([])
  const [loading, setLoading] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const fetchCountries = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearchChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    setSearch(value)
  }

  const getFilteredCountries = (): Country[] => {
    return countries.filter(country => country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

  React.useEffect(() => {
    fetchCountries()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-black dark:text-white">LOADING</div>
  }
  return (
    <>
      <section>
        <Search search={search} handleSearchChange={handleSearchChange} />
        {getFilteredCountries().map(country => (
        <Card
          key={country.name}
          name={country.name}
          flag={country.flag}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
        ))}
      </section>
    </>
  )
}

export default Home
