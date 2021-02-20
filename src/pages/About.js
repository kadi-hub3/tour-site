import React, { useState } from 'react'
import { questions } from '../data'
import Question from '../components/Question'
import Title from '../components/Title'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const About = () => {

    return (
        <>
            <Banner title='About Tour-EU' subtitle='Our mission, our vision, our discipline'>
                <p>Mei eu mollis albucius, ex nisl contentiones vix. Duo persius volutpat at, cu iuvaret epicuri mei. Duo posse pertinacia no, ex dolor contentiones mea. Nec omnium utamur dignissim ne. Mundi lucilius salutandi an sea, ne sea aeque iudico comprehensam. Populo delicatissimi ad pri. Ex vitae accusam vivendum pro.</p>
                <button>See all</button>
            </Banner>
            <div className='q-container'>
                <Title title='Frequent Asked Questions' />
                <section className='info'>
                    {questions.map((question) => {
                        return (
                            <Question key={question.id} {...question} />
                        );
                    })}
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About
