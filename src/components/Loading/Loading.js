import React, { useState } from 'react';
import Media from '../Media/Media';
import { Carousel, Card, Row } from 'react-bootstrap';
import * as productsService from '../../_services/products.service';


const Loading = () => (
    <div>
        Loading...
    </div>
);

export default Loading;