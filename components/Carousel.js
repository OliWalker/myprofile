import React from 'react';
import Slider from 'react-slick';

export default class MyCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true
    };
    return (
      <Slider {...settings}>
        {this.props.pics.map(el => (
          <div>
            <img src={el} />
          </div>
        ))}
        <div>
          <h1>Video coming soon!</h1>
        </div>
        <style jsx>
          {`
            div {
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            img {
              width: 25vw;
              margin-left: 15vw;
            }
          `}
        </style>
      </Slider>
    );
  }
}
