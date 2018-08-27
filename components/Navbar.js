const Navbar = () => (
  <div className="navbar">
    <button>Home</button>
    <button>Portfolio</button>
    <button>Skills</button>
    <button>Contact</button>

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
        }
        button {
          border: 1px solid white;
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
