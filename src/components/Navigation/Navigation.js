import React from 'react'
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
      return (
        <div>
          <p onClick={() => onRouteChange('signin')}>Sign Out</p>
        </div>
      )
    } else {
      return (
        <div>
          <p onClick={() => onRouteChange('register')}>Register</p>
          <p onClick={() => onRouteChange('signin')}>Sign In</p>
        </div>
      )
    }
}

export default Navigation