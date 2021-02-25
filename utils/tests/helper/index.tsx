import '../matchMedia.mock' // Must be imported before the tested file
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'

interface TestProviderOptions {
  theme?: string
}

interface CustomOptions extends RenderOptions, TestProviderOptions {}

const createTestProviders = ({
  theme = 'dark'
}: TestProviderOptions): React.FC => ({ children }) => (
  <ThemeProvider defaultTheme={theme} enableSystem={false} attribute="class">
    {children}
  </ThemeProvider>
)

const customRender = (
  ui: React.ReactElement,
  { theme, ...options }: CustomOptions = {}
): RenderResult =>
  render(ui, { wrapper: createTestProviders({ theme }), ...options })

export * from '@testing-library/react'

export { customRender as render }
