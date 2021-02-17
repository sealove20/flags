import * as React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '@/components/Layout'

import '../styles/globals.css'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
