
import React from 'react';
import { useQuery } from 'react-apollo';
import Product from '../Product/Product';
import { Col, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import gql from 'graphql-tag';
import * as productsService from '../../_services/products.service';

const Products = (props) => {

  //const { loading, error, data } = useQuery(props.query);
  const { loading, error, data } = useQuery( gql`{${props.query}}`);
  //const { loading, error, data } = useQuery( gql`{${productsService.getProductsQuery()}}`);
  console.log(productsService.getProductsQuery());


  if (loading) {
    return <Loading></Loading>;
  } else if (error) {
    return <Error error={error}></Error>;
  }

  return (
      <ProductsList products={data.getProducts} />
  );
  
};
  

const ProductsList = ({ products }) => (
  <Row>
    {
      products.map((product) => {
        return (
          <Col key={product.id} xs={4}>
            <Product product={product} isMin={true} ></Product>    
          </Col>
        );
      })}
  </Row>
);

export default Products;