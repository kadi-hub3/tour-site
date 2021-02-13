import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Title from '../components/Title'
import News from '../components/News'
import { Link } from 'react-router-dom'
import Tours from '../components/Tours'
import Areas from '../components/Areas'
import Activities from '../components/Activities'
import Footer from '../components/Footer'

const url = 'https://course-api.com/react-tours-project'


const Home = () => {
    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])

    return (
        <>
            <Hero>
                <Title title='Sustainability startergy 2030' subtitle='Sustainability at IND' />
            </Hero>
            <Tours tours={tours} />
            <News />
            <Areas />
            <Activities />
            <Footer />
        </>
    )
}

export default Home
