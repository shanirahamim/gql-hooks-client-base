
import gql from 'graphql-tag';
import  Query  from 'graphql-query-builder';

const MEDIA_DEFAULT_FIELDS = ["id", "type", "url"];
const PRODUCT_DEFAULT_FIELDS = ["id", 	"name",	"vendor"];

const GET_PRODUCTS = gql`
	{
	  getProducts{
		id, 
		name,
		media {
		  id,
		  type,
		  url
		},
		vendor
	  }
	}
	`;

const GET_PRODUCT_BY_ID = gql`
query getProduct($id: String!) {
	  getProduct(id: $id){
		id, 
		name,
		media {
		  id,
		  type,
		  url
		},
		vendor
	  }
	}
	`;

let searchQuery;

const getProductsQuery = () => {
	if(!searchQuery){
		updateSearchQuery();
	}

	return searchQuery;
}	

const updateSearchQuery = (params, productsFields=PRODUCT_DEFAULT_FIELDS, withMedia=true, mediaFields=MEDIA_DEFAULT_FIELDS, mediaParams) => {
	let mediaQuery;
	if(withMedia){
		if(mediaParams){
			mediaQuery = new Query("media",mediaParams);
		}else{
			mediaQuery = new Query("media");
		}
		
		mediaQuery.find(mediaFields);
	}

	if(mediaQuery){
		productsFields.push(mediaQuery);
	}

	if(params){
		searchQuery = new Query("getProducts", params);	
	}else{
		searchQuery = new Query("getProducts");	
	}
	
	searchQuery.find(productsFields);

	console.log(searchQuery);
}

const getProductByIdQuery = () => {
	return GET_PRODUCT_BY_ID;
}

export {
	MEDIA_DEFAULT_FIELDS,
	PRODUCT_DEFAULT_FIELDS,
	getProductsQuery,
	updateSearchQuery,
	getProductByIdQuery
};