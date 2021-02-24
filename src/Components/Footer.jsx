import { LangContext } from "../LangContext"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"

import { uz, ru, en } from "./Data"


function Footer () {

  const {lang} = useContext(LangContext)
  const {theme} =useContext(ThemeContext)

  return (

    <>
      <footer className={theme}>
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
      </footer>
    </>
  )
}

export default Footer