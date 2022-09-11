import React from 'react'

import Header from './header'
import Container from './container'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='h-screen'>
        <Container>
          {children}
        </Container>
      </main>
    </div>
  )
}

export default Layout