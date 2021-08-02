import * as React from 'react'
import Header from '@/components/Header'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-screen px-8">
        {children}
      </main>
    </>
  )
}

export default Layout
