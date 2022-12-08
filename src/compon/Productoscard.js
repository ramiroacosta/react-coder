import React from 'react'
import { Link } from 'react-router-dom'
const Productoscard = ({ id, title, description, price, imageSrc, stock }) => {
    return (
        <Link to={`/detalle/${id}`}>
            <div className=" card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div key={id} className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between">
                        <div>{price}</div>
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </Link>

    )


}

export default Productoscard