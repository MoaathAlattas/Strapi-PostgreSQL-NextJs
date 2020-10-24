import { useState, createContext } from 'react'
import { auth } from "../services/api"
import Cookies from 'js-cookie'
const AppContext = createContext({})

const AppProvider = (props) => {
  let userCookie = {}

  if (typeof window !== "undefined") {
    userCookie = JSON.parse(Cookies.get('user') || "{}")
  } else {
    userCookie = { id: 23, username: "moaath" };
  }

  const [user, setUser] = useState(userCookie)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {props.children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider }