import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Link } from 'react-router-dom'


const News = () => {
    return (
        <div className='news'>
            <Hero hero='news-img'>
                <Banner subtitle='Explore it the way you like' title='What does EU have to offer?'>
                    <p>Mei eu mollis albucius, ex nisl contentiones vix. Duo persius volutpat at, cu iuvaret epicuri mei. Duo posse pertinacia no, ex dolor contentiones mea. Nec omnium utamur dignissim ne. Mundi lucilius salutandi an sea, ne sea aeque iudico comprehensam. Populo delicatissimi ad pri. Ex vitae accusam vivendum pro.</p>
                    <button>See all itineries & tours</button>
                </Banner>
            </Hero>

        </div>
    )
}

export default News
