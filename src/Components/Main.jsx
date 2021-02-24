import { useContext } from 'react'
import { LangContext } from '../LangContext'
import { ThemeContext } from '../ThemeContext'

import {mainUz, mainRu, en} from "./Data"


function Main() {

  const {lang} = useContext(LangContext)
  const {theme} = useContext(ThemeContext)

  return (
    <>
      <main className={theme}>
        <h1>
        {lang === 'uz' && mainUz.title}
        {lang === 'ru' && mainRu.title}
        {lang === 'en' && en.title}
        </h1>
        <p>
        {lang === 'uz' && mainUz.text}
        {lang === 'ru' && mainRu.text}
        {lang === 'en' && en.text}
        </p>
        <button className='btn'>
        {lang === 'uz' && mainUz.btn}
        {lang === 'ru' && mainRu.btn}
        {lang === 'en' && en.btn}
        </button>
      </main>
    </>
  )
}

export default Main