import React from 'react'
import Tour from './Tour'
import Title from './Title'

const Tours = ({ tours }) => {

    return (
        <>
            <Title title='Best Tours Of 2021' />
            <div className='tours'>
                {tours.map((tour, index) => {
                    return <Tour key={index} {...tour} />
                })}
            </div>
        </>
    )
}

export default Tours
