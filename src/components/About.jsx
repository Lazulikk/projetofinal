import React from 'react'

function About(props) {
  return (
    <div id='about'> 
    <div className='about-image'>
        <img src={props.image} alt=''/> 
        </div>
    <div className='about-text'>
    <h2> {props.title} </h2>
    <p> Cloque no botão abaixo e faça sua inscrição para o evento, que ocorrerá em 17/03/2024</p>
    <button className='hover-about'> {props.button} </button>
          </div>
    </div>
  )
}

export default About