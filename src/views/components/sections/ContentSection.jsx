import React from 'react'
import Button from '../Button'

function ContentSection() {
    return (
        <section className="section">
            <span className='section--subtitle'>Create, explore, & collect digital art NFTs.</span>
            <span className='section--title'>The new creative economy.</span>
            <Button isColored={false} isBiggerFont={true} text="Start your search" />
        </section>
    )
}

export default ContentSection