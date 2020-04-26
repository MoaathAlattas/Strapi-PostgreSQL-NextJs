import { useState, createContext, useEffect } from 'react'
import Cookies from 'js-cookie'
const AppContext = createContext({})

const AppProvider = (props) => {

  const userCookie = JSON.parse(Cookies.get('user') || "{}")

  const [user, setUser] = useState(userCookie)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {props.children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider }