import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'

import ThemeToggle from '@/components/ThemeToggle'

test('Should render ThemeToggle component', () => {
  const { getByRole } = render(<ThemeToggle />)

  console.log(fireEvent.click(getByRole('button', { name: 'Toggle Dark Mode' })))
})
