import axios from 'axios'

interface Country {
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

export const get = async (): Promise<Country[]> => {
  const countries: Country[] = await axios.get('https://restcountries.eu/rest/v2/all')

  return countries
}
