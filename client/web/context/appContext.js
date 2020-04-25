import React, { useEffect, useState } from 'react'
import { current } from '../utils/auth'
const AppContext = React.createContext(false)

const AppProvider = (props) => {
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   ; (
  //     async function () {
  //       setUser(await current())
  //     }
  //   )()
  // }, [])

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {props.children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider }