import * as React from 'react'
import axios from 'axios'
import Card from '@/components/Card'
import Search from '@/components/Search'
import Select from 'react-select'

const { useState } = React
interface Country {
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

type SelectSchema = {
  value: string
  label: string
}

const Home: React.FunctionComponent = () => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedOption, setSelectedOption] = useState(null)

  const options = [
    { value: 'americas', label: 'Americas' },
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceania', label: 'Oceania' }
  ]

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

  const fetchCountriesByRegion = async (regionName: string): Promise<void> => {
    try {
      const response = await axios.get(`https://restcountries.eu/rest/v2/region/${regionName}`)
      setCountries(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearchChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = event.currentTarget.value

    setSearch(value)
  }

  const handleSelectChange = ({ value, label }: SelectSchema): void => {
    const regionName = value
    setSelectedOption({ value, label })

    fetchCountriesByRegion(regionName)
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
        <Select
          options={options}
          onChange={handleSelectChange}
          value={selectedOption}
          className="mb-5"
          instanceId="flags-select"
        />

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
