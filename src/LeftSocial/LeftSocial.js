import React from 'react';
import './LeftSocial.css'

export default function LeftSocial() {
  return (
    <div>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
    <div className='icon-bar'>
      <a href='https://linkedin.com/in/rafaelballestrin/' target='_blank' rel='noopener noreferrer' className='linkedin'><i className='fa fa-linkedin'></i></a>
      <a href='https://github.com/rafaelballestrin' target='_blank' rel='noopener noreferrer' className='github'><i className='fa fa-github'></i></a>
      <a href='mailto:rafaelballestrin@gmail.com' className='contact'><i className='fa fa-envelope'></i></a>
    </div>
    </div>
  )
}