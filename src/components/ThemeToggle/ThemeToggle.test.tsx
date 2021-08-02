import * as React from 'react'
import { render, fireEvent } from '../../../utils/tests/helper'
import { useTheme } from 'next-themes'

import ThemeToggle from '@/components/ThemeToggle'

const ThemeSpy: React.FunctionComponent = () => {
  const { theme } = useTheme()
  return <span data-testid="theme-spy">{theme}</span>
}

it('Should check light theme', () => {
  const { getByTestId, getByRole } = render(
    <>
      <ThemeToggle />
      <ThemeSpy />
    </>,
    { theme: 'dark' }
  )
  const spy = getByTestId('theme-spy')
  const button = getByRole('button', { name: 'Toggle Dark Mode' })

  fireEvent.click(button)
  fireEvent.click(button)
  expect(spy).toHaveTextContent('light')
})
