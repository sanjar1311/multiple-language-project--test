import { createContext, useState } from "react"

const LangContext = createContext()

function ContextProvider({ children }) {

  const [lang, setLang] = useState('uz');


  return(
    <LangContext.Provider value={{lang, setLang}}>
      { children }
    </LangContext.Provider>
  )
}

export {ContextProvider, LangContext}