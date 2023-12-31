import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, image, price, stock }) => {
    return (
        <article className='card'>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} />
            </picture>
            <section>
                <p>
                    ${price}
                </p>
                <p>
                    Stock: {stock}
                </p>
            </section>
            <footer>
                <button>
                    <Link to={`/item/${id}`} className="buttonDetail"> Ver detalle </Link>
                </button>
            </footer>
        </article>
    )
}

export default Item