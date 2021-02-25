import * as React from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const Header: React.FunctionComponent = () => {
  return (
    <header className="w-screen h-24 px-8 shadow-md flex justify-between items-center bg-light-background dark:bg-dark-background">
      <p className="text-light-text dark:text-white">Where in the world?</p>
      <ThemeToggle />
    </header>
  )
}

export default Header
