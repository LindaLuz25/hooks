import { useState } from 'react'
import { UserContext } from './UserContext'
import React from 'react'

export const UserProvider = ({children}) => {
  const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
