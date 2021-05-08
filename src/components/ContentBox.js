import React from 'react';

export default function ContentBox(props) {
  const {heading, text, image, image2x, image3x, alt} = props;

  return (
    <article className='content-box'>
      <h3 className='content-box__title'>{heading}</h3>
      <div className='content-box__text'><p>{text}</p></div>
      {!image ? null :
      <img className='content-box__image' src={image} 
        srcset={image + ' 1x,' + image2x + ' 2x,' + image3x + ' 3x'}
        alt={alt} /> }
    </article>
  )
}
