
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Product.scss';
import MediaCarousel from '../Media/MediaCarousel';

const Product = (props) => {
    
    const [product, setProduct] = useState(props.product);

    if(!product){
        return <div></div>;
    }

    return (<Card className={`product ${props.isMin?"min":""} product-card`}>
            <Card.Body>
            <div className="media-container">
                <MediaCarousel mediaList={product.media} isMin={props.isMin}></MediaCarousel>
            </div>
            <span className="text-muted">Vendor: {product.vendor}</span>
            <Card.Title>
                <a href={"/product/" + product.id}>{product.name}</a>
            </Card.Title>
        </Card.Body>
    </Card>);
};



export default Product;