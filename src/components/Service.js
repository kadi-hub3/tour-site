import React, { Component } from 'react'
import Title from './Title'
import { FaPassport, FaPlaneDeparture, FaCompass, FaUserAlt } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'

export default class Service extends Component {
    state = {
        services: [
            {
                icon: <FaPassport />,
                title: 'Visa Information',
                info: 'Lorum ipsum dolor sit amet consecteur adipiscing elit. Magni, corpris!',
            },
            {
                icon: <FaPlaneDeparture />,
                title: 'Getting Here',
                info: 'Lorum ipsum dolor sit amet consecteur adipiscing elit. Magni, corpris!',
            },
            {
                icon: <FaCompass />,
                title: 'Getting Around',
                info: 'Lorum ipsum dolor sit amet consecteur adipiscing elit. Magni, corpris!',
            },
            {
                icon: <FaUserAlt />,
                title: 'Things To Do',
                info: 'Lorum ipsum dolor sit amet consecteur adipiscing elit. Magni, corpris!',
            },
            {
                icon: <FiShoppingBag />,
                title: 'Shopping',
                info: 'Lorum ipsum dolor sit amet consecteur adipiscing elit. Magni, corpris!',
            },
            {
                icon: <GoLocation />,
                title: 'Itineraries',
                info: 'Lorum ipsum dolor sit amet consecteur adipiscing elit. Magni, corpris!',
            }
        ]
    }

    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>

        )
    }
}
