import { useContext } from 'react'
import { LangContext} from '../LangContext'
import { ThemeContext } from '../ThemeContext'

import { uz, ru, en } from "./Data"


function Header() {

  const {lang, setLang} = useContext(LangContext)
  const {theme, setTheme} =useContext(ThemeContext)


  return (
    <>
      <header className={theme}>

        <div>
        <select 
        defaultValue='uz' 
        onChange={(e)=> {
          setLang(e.target.value)
        }}
        >
          <option value='uz'>Uzb</option>
          <option value='ru'>Rus</option>
          <option value='en'>Eng</option>
        </select>

        <select 
        defaultValue="light"
        onChange={(e)=> {
          setTheme(e.target.value)
        }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
        </div>
  
        <h1>
        {lang === 'uz' && uz.title}
        {lang === 'ru' && ru.title}
        {lang === 'en' && en.title}
        </h1>
        <p>
        {lang === 'uz' && uz.text}
        {lang === 'ru' && ru.text}
        {lang === 'en' && en.text}
        </p>
        <button className='btn'>
        {lang === 'uz' && uz.btn}
        {lang === 'ru' && ru.btn}
        {lang === 'en' && en.btn}
        </button>
      </header>
    </>
  )
}

export default Header