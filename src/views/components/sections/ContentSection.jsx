import React from 'react'
import Button from 'views/components/shared/Button';

function ContentSection() {
    return (
        <section className="section">
            <span className='section--subtitle font-hairline--2'>Create, explore, & collect digital art NFTs.</span>
            <h3 className='section--title font-headline--3'>The new creative economy.</h3>
            <Button text="Start your search" size='Medium'  />
        </section>
    )
}

export default ContentSection