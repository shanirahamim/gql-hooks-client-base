
import React from 'react';
import { useQuery } from 'react-apollo';
import Product from '../Product/Product';
import { Col, Row } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import gql from 'graphql-tag';
import * as vendorsService from '../../_services/vendors.service';

const getVendorsSelect = (props) => {

  const { loading, error, data } = useQuery( gql`{${vendorsService.getVendorsQuery()}}`);

  if (loading) {
    return <Loading></Loading>;
  } else if (error) {
    return <Error error={error}></Error>;
  }

  return (
      
      <ProductsList products={data.getVendors} />
  );
  
};
  

const ProductsList = ({ products }) => (
  <Row>
    {
      products.map((product) => {
        return (
          <Col key={product.id}>
            <Product product={product} isMin={true}></Product>    
          </Col>
        );
      })}
  </Row>
);

export default getVendorsSelect;