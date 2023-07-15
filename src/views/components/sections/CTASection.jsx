import React from 'react'
import Blocks from 'assets/blocks.png'
import Button from 'views/components/shared/Button'

function CTASection() {
  return (
    <section className='cta'>
      <div className='cta-content'>
        <span className='cta-content--subtitle font-hairline--1'>
          Save your time with Stacks
        </span>
        <h1 className='cta-content--title font-headline--1'>
          Earn free crypto with Crypter
        </h1>
        <span className='cta-content--info font-body--2'>
          A creative agency that lead and inspire
        </span>
        <div className='cta-content--actions'>
          <Button text='Earn now' isColored={true} />
          <Button text='Discover more' />
        </div>
      </div>
      <img className='cta--image' srcSet={Blocks} alt='Blocks' />
    </section>
  )
}

export default CTASection