import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price }) => {
    const [readmore, setReadmore] = useState(false)
    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <div>
                <h6>{name}</h6>
                <h6>€{price}</h6>
            </div>
            <p>{readmore ? info : `${info.substring(0, 200)}`}
                <button onClick={() => setReadmore(!readmore)}>
                    {readmore ? 'Show less' : 'Read more'}
                </button>
            </p>

        </article>
    )
}

export default Tour
