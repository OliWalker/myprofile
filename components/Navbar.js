import myProjectList from '../myProjectList';
const skillsHeight = Object.keys(myProjectList).length + 1;

const Navbar = () => (
  <div className="navbar">
    <button onClick={() => window.scrollTo(0, 0)}>Home</button>
    <button onClick={() => window.scrollTo(0, window.innerHeight)}>
      Portfolio
    </button>
    <button
      onClick={() => window.scrollTo(0, window.innerHeight * skillsHeight)}
    >
      Skills
    </button>

    <style jsx>
      {`
        .navbar {
          width: 100vw;
          height:6vh;
          background-color: rgba(9, 9, 9);
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
          background-color: rgba(9, 9, 9);
          font-size 1.5rem;
          border-radius: 2px;
          margin-right: 10px;
        }
      `}
    </style>
  </div>
);

export default Navbar;
