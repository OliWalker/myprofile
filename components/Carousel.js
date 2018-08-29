import React, { Component } from 'react';
// import
import { Carousel } from 'react-responsive-carousel';

class Carouselpics extends Component {
  render() {
    return (
      <Carousel autoPlay>
        {/* {links.map(el => ( */}
        <div>
          <img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000__Pixel_2__pixel_very_silver_portrait.png" />
          <p className="legend">Lengend</p>
        </div>

        {/* ))} */}
        <style jsx>
          {`
            img {
              width: 20vw;
            }
          `}
        </style>
      </Carousel>
    );
  }
}

export default Carouselpics;

const links = [
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000__Pixel_2__pixel_very_silver_portrait.png',
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000_add_Pixel_2__pixel_very_silver_portrait.png',
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559542/localhost_3000__Pixel_2_2__pixel_very_silver_portrait.png',
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559542/localhost_3000__Pixel_2_3__pixel_very_silver_portrait.png'
];
