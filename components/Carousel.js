import React from 'react';
import Slider from 'react-slick';

export default class MyCarousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000__Pixel_2__pixel_very_silver_portrait.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000_add_Pixel_2__pixel_very_silver_portrait.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000__Pixel_2_2__pixel_very_silver_portrait.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000__Pixel_2_3__pixel_very_silver_portrait.png" />
        </div>
        <style jsx>{`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            width: 25vw;
            margin-left: 15vw;
          }
        `}</style>
      </Slider>
    );
  }
}

const links = [
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000__Pixel_2__pixel_very_silver_portrait.png',
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559541/localhost_3000_add_Pixel_2__pixel_very_silver_portrait.png',
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559542/localhost_3000__Pixel_2_2__pixel_very_silver_portrait.png',
  'https://res.cloudinary.com/dh9xnvxbz/image/upload/v1535559542/localhost_3000__Pixel_2_3__pixel_very_silver_portrait.png'
];
