import React from 'react'
import "./Layout.css"

const Layout = ({children}) => {
  return (
    <main className='layout-main'>
      {children}
    </main>
  )
}


export default Layout
