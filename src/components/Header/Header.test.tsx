import * as React from 'react'
import { render } from '@testing-library/react'

import Header from '@/components/Header'

test('Should render Header component', () => {
  const { getByText } = render(<Header />)
  expect(getByText('Where in the world?')).toBeVisible()
})
