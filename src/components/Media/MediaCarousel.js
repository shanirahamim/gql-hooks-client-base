import React, { useState } from 'react';
import Media from './Media';
import { Carousel } from 'react-bootstrap';

const MediaCarousel = ({mediaList, isMin}) => {
    const [carouselActiveIndex, setCarouselActiveIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setCarouselActiveIndex(selectedIndex);
    };


    if (mediaList.length > 1) {
        mediaList.sort((item1, item2) => {
            if (item1.type == item2.type) {
                return 0;
            } else if (item1.type == "video") {
                return 1;
            } else if (item2.type == "video") {
                return -1;
            } else {
                return 0;
            }
        });
    }else if (mediaList.length <= 1) {
        return <Media media={mediaList[0]} currentlySeen={true} isMin={isMin}></Media>;
    }

    // todo: carousel with a few items automatically switches 
    return (
        <Carousel activeIndex={carouselActiveIndex} onSelect={handleSelect} wrap={true} pause={"hover"} interval={10000000}>
            {mediaList.map((media, index) => {
                return (
                    <Carousel.Item key={media.id} >
                        <Media media={media} currentlySeen={carouselActiveIndex == index} isMin={isMin}></Media>
                    </Carousel.Item>
                );
            })
            }
        </Carousel>);

}

export default MediaCarousel;