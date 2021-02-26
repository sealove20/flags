import * as React from 'react'

type Props = {
  name: string
  flag: string
  population: number
  region: string
  capital: string
}

const Card: React.FunctionComponent<Props> = ({ name, flag, population, region, capital }: Props) => {
  return (
    <div className="first:pt-24 pb-10 rounded-full">
      <img src={flag} alt="country flag" className="h-3/6 w-full" />
      <div className="flex flex-col h-52 dark:bg-dark-element dark:text-white shadow-md p-6">
        <h2 className="first:py-3 font-bold text-xl">{name}</h2>
        <p><span className="font-semibold">Population: </span>{new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(population)}</p>
        <p className="py-1"><span className="font-semibold">Region: </span>{region}</p>
        <p><span className="font-semibold">Capital: </span>{capital}</p>
      </div>
    </div>
  )
}

export default Card
