import React from 'react';

export default function Heading(props) {
  return (
    <div className='section__heading'>
      <h1 className='section__title'>{props.title}</h1>
      <p className='section__description'>{props.description}</p>
    </div>
  )
}