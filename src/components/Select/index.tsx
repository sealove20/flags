import * as React from 'react'
import Select from 'react-select'

export type selectOption = {
  value: string
  label: string
}

type Props = {
  onChange: (options: selectOption) => void
  selectedOption: string
}

const options = [
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

export const SelectComponent: React.FunctionComponent<Props> = ({ onChange, selectedOption }: Props) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      value={selectedOption}
      className="mb-5"
      instanceId="flags-select"
    />
  )
}
