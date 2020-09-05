
import React, { useState } from 'react';
import * as productsService from '../../_services/products.service';
import * as vendorsService from '../../_services/vendors.service';

import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import Product from '../Product/Product';
import { Col, Row, Container, Form, Button, FormControl  } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import Products from './Products';



const ProductsView = (props) => {
   const { loadingVendors, error, data } = useQuery( gql`${vendorsService.getVendorsQuery()}`);
    const [searchByName, setSearchByName] = useState("");
    const [searchByVendor, setSearchByVendor] = useState("All");
    const [query, setQuery] = useState(productsService.getProductsQuery());  
    

    const onQueryUpdate = (e) => {
        e.preventDefault();

        let searchByVendorValue = searchByVendor === "All"? null : searchByVendor;
        productsService.updateSearchQuery({ 
            "name": searchByName,
            "vendor": searchByVendorValue,
         });
        setQuery(productsService.getProductsQuery());
    }

    const setVendorName = (e) => {
        console.log("setVendor name");
        //debugger;// THERE IS A DELAY - IT DOSENT CHANGE THE VENDOR AND RESEARCHES AND STOPS? 
        
        setSearchByVendor(e.target.value); 

        let searchByVendorValue = e.target.value === "All"? null : e.target.value;
        productsService.updateSearchQuery({ 
            "name": searchByName,
            "vendor": searchByVendorValue,
         });
        setQuery(productsService.getProductsQuery());

        //onQueryUpdate(e);
    }

    const getVendorsOptions = () => {
        if(loadingVendors){
            return <option>All</option>;
        }else if(data && data.getVendors){
            if(data.getVendors[data.getVendors.length - 1] !== "All"){
                data.getVendors.push("All");
            }
            
            return data.getVendors.map((vendor,index) => {
                return (
                    <option key={index}>{vendor}</option>
                );
            })            
        }
        
    }

    return (<Container>
             <Row>
            <Form inline onSubmit={(e) => {onQueryUpdate(e)}}>
                <FormControl type="text" placeholder="Product Name" className="mr-sm-2" onChange={(e) => {setSearchByName(e.target.value); }} />
                <FormControl as="select"  placeholder="Vendor" className="mr-sm-2" onChange={(e) => {setVendorName(e)}} value={searchByVendor} >
                    {getVendorsOptions()}
                </FormControl>
                <Button variant="outline-success" type="submit">Search</Button>
        </Form>
      </Row>
 

        <Products  query={query} isMin={false}></Products>
    </Container>);
};


export default ProductsView;