import myProjectList from '../myProjectList';
const skillsHeight = Object.keys(myProjectList).length + 1;
import React from 'react'
import { Spring } from 'react-spring';

const scrollFunctions = {
  Home: () => window.scrollTo({left:0, top:0, behavior: 'smooth'}),
  Portfolio: () => window.scrollTo({left:0, top:window.innerHeight, behavior: 'smooth'}),
  Skills: () => window.scrollTo({left:0, top:window.innerHeight * skillsHeight, behavior:'smooth'})
  }

class Navbar extends React.Component{
  state={
    Home: false,
    Portfolio: false,
    Skills: false,
  }

  hoverState=(name)=>{
      if (name==='clear') {
        this.setState({ Home: false,
        Portfolio: false,
        Skills: false,})
      } else {
        this.setState({[name]: !this.state[name]})
      }
  }

  render() {
    return(
      <div className="navbar">
        { Object.keys(this.state).map(key => 
          <Spring 
            key={key}
            from={{transform: 'skew(.312rad)'}}
            to={{transform: 'skew(-.312rad)'}}
          >
            {props => 
              <button
                style={this.state[key] ? props : {}} 
                name={key}
                onMouseOver={(e)=>{this.hoverState(e.target.name)}}
                onMouseLeave={() => this.hoverState('clear')}
                onClick={scrollFunctions[key]}>
                {key}
              </button>
            }
          </Spring>
        )}

        <style jsx>
          {`
            .navbar {
              width: 100vw;
              height:6vh;
              background-color: rgb(9, 9, 9);
              display: flex;
              justify-content: flex-end;
              align-items: center;
              position: sticky;
              top: 0;
              z-index: 10;
              padding-right: 5vw;
            }
            button {
              font-weight: bold;
              border: none;
              padding: 5px 10px;
              color: white;
              background-color: rgb(9, 9, 9);
              font-size 1.5rem;
              border-radius: 2px;
              margin-right: 10px;
            }

            @media (max-device-width: 480px){
              button {
                font-size: 2.6rem;
              }
            }
          `}
        </style>
      </div>
    )
  }
};

export default Navbar;
