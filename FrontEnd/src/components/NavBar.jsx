import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <Link to='/'>
        Home
      </Link>
      <Link to='/mapview'>
        Map
      </Link>
      <Link to='/login'>
        Login
      </Link>
      <Link to='/web'>
        Login
      </Link>
    </div>
  )
}

export default NavBar