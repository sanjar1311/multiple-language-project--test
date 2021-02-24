import { useContext } from 'react'
import { LangContext} from '../LangContext'

import { uz, ru, en } from "./Data"


function Header() {

  const {lang, setLang} = useContext(LangContext)


  return (
    <>
      <header className="box1">

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