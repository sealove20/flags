import * as React from 'react'
import Layout from '@/components/Layout'
import axios from 'axios'

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

  React.useEffect(() => {
    fetchCountries()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">LOADING</div>
  }
  return (
    <>
      <Layout>
        <div>
          {countries.map(country => (
            <img key={country.name} src={country.flag} alt="country flag" className="h-3/6 w-3/6" />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default Home
