import * as React from 'react'

type Props = {
  color: string
  width: number
  height: number
  containerStyle: string
}

const SearchIcon: React.FunctionComponent<Props> = ({ color, width, height, containerStyle }: Props) => {
  return (
    <div className={`flex items-center ${containerStyle}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-search h-full ${color}`}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </div>
  )
}

export default SearchIcon
