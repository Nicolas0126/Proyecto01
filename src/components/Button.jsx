import React from 'react'
import { FaSync } from 'react-icons/fa';
import "./Styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className="button" onClick= {handleNewQuote}><FaSync /></button>
  )
}

export default Button