import React from 'react';
import Slider from 'react-slick';

export default class MyCarousel extends React.Component {
  demo = url => {
    const windowFeatures = 'resizeable=no, height=731, width=411';
    window.open(url, 'some name', windowFeatures);
  };

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: 0
    };
    return (
      <Slider {...settings}>
        {this.props.pics.map(el => (
          <div>
            <img src={el} />
          </div>
        ))}
        {this.props.demo ? (
          <div>
            <h1>Want to try?</h1>
            <button onClick={() => this.demo(this.props.demo)}>Yes!</button>
          </div>
        ) : null}

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
            h1 {
              margin-top: 20%;
            }
            button {
              margin-top: 10%;
              background-color: transparent;
              border: none;
               {
                /* border: 1px solid white; */
              }
              border-radius: 4px;
              padding: 10px 15px;
              color: white;
              font-weight: bold;
              font-size: 1.5rem;
              box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease 0s;
            }
            button:hover {
              box-shadow: 0px 15px 20px rgba(18, 18, 18, 0.2);
              transform: translateY(-7px);
              transform: scale(1.1);
            }
          `}
        </style>
      </Slider>
    );
  }
}
