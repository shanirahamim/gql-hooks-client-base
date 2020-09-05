
import gql from 'graphql-tag';

const GET_VENDORS = gql`
	{
	  getVendors
	}
	`;

const getVendorsQuery = () => {
	return GET_VENDORS;
}	
export {
	getVendorsQuery
};