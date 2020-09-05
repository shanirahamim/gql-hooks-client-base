
import React from 'react';
import * as productsService from '../../_services/products.service';
import { useQuery } from 'react-apollo';
import Product from '../Product/Product';
import { Col, Row, Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';


const ProductView = (props) => {
    const { loading, error, data } = useQuery(productsService.getProductByIdQuery(), { variables :{
        id: props.match.params.product_id
    }});
   
    
    if(loading){
        return <Loading></Loading>;
    }else if (error) {
        return <Error error={error}></Error>;
    }

    return (<Container>
        <Row>
            <Col>
            <Product product={data.getProduct}></Product>
            </Col>
      </Row>
      </Container>);
};


export default ProductView;
