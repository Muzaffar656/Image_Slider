import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CustomLeftArrow,CustomRightArrow } from './CustomeArrow';

const MultiCrousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App">
      <h2>React Multi-Carousel Example</h2>
      <Carousel
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScThjJcIUKavpXidZzI9TmvKDeuCbTuijoiA&usqp=CAU" alt="imaslider" /></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScThjJcIUKavpXidZzI9TmvKDeuCbTuijoiA&usqp=CAU" alt="imaslider" /></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScThjJcIUKavpXidZzI9TmvKDeuCbTuijoiA&usqp=CAU" alt="imaslider" /></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScThjJcIUKavpXidZzI9TmvKDeuCbTuijoiA&usqp=CAU" alt="imaslider" /></div>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScThjJcIUKavpXidZzI9TmvKDeuCbTuijoiA&usqp=CAU" alt="imaslider" /></div>

        <div><h3>Item 3</h3></div>
        <div><h3>Item 4</h3></div>
        <div><h3>Item 5</h3></div>
        <div><h3>Item 6</h3></div>
      </Carousel>
    </div>
  );
}

export default MultiCrousel;