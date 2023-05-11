import React from 'react';
import {useParams} from 'react-router-dom'

const Product = ({products}) => {

    const {id} = useParams()
    const product = products[id]

    return (
        <div>
            <p>id: {product.id}</p>
            <h1>Название: {product.title}</h1>
        </div>
    );
};

export default Product;