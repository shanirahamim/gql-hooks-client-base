import React, { useState } from 'react';

const Error = ({error}) => {
    if(error.message){
        return <div>An error has occurred: {error.message}</div>
    }else {
        return <div>An error has occurred.</div>
    }
    
};

export default Error;