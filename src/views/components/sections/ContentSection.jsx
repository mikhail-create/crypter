import React from 'react'
import Button from '../Button'

function ContentSection() {
    return (
        <section className="section">
            <span className='section--subtitle font-hairline--2'>Create, explore, & collect digital art NFTs.</span>
            <h3 className='section--title font-headline--3'>The new creative economy.</h3>
            <Button isColored={false} isBiggerFont={true} text="Start your search" />
        </section>
    )
}

export default ContentSection