import React from 'react';
import Slider from 'react-slick';

export default class MyCarousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: 0
      // responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       infinite: true,
      //       dots: true
      //     }
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      // ]
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
              display: none;
              justify-content: center;
              align-items: center;
              text-align: center;
              width: 100%;
            }
            img {
              height: 47vh;
              margin: 0 auto;
            }
          `}
        </style>
      </Slider>
    );
  }
}
