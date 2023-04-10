import React from 'react'
import Button from './Button';
import "./Styles/ContainerInfo.css"

const ContainerInfo = ({quote, handleNewQuote}) => {
    console.log(quote);
  return (
    <section className='ContainerInfo'> 
    <h1 className='ContainerInfo__title'>PHRASES FOR ANOTHER GALAXY</h1>

    <article className='ContainerInfo__phrase'>
      <p>{quote.phrase}</p>
    </article>

    <Button handleNewQuote= {handleNewQuote}/>

    <article className='ContainerInfo__author'>
      <h4>Fuente: {quote.author}</h4>
    </article>

  </section>
  )
}

export default ContainerInfo