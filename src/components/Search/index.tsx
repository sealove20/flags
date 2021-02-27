import * as React from 'react'
import SearchIcon from '@/components/SearchIcon'

type Props = {
  search: string
  handleSearchChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const Search: React.FunctionComponent<Props> = ({ search, handleSearchChange }: Props) => {
  return (
    <div className="flex my-10 justify-center w-full shadow-lg">
    <SearchIcon color="text-light-input dark:text-dark-text bg-light-background dark:bg-dark-element px-5" height={40} width={60} containerStyle="rounded-l-lg bg-light-background" />
    <input
      className="dark:bg-dark-element w-full p-4 rounded-r-lg outline-none text-light-text dark:text-dark-text dark:placeholder-dark-text"
      type="text"
      name="country-search"
      placeholder="Search for a country..."
      onChange={handleSearchChange}
      value={search}
    />
  </div>
  )
}

export default Search
