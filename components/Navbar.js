const skillsHeight = Object.keys(myProjectList).length + 1;
import myProjectList from "../myProjectList";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#skills">Skills</a>
      <style jsx>
        {`
            nav {
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
            a {
              font-weight: bold;
              border: none;
              padding: 5px 10px;
              color: white;
              background-color: rgb(9, 9, 9);
              font-size 24px;
              border-radius: 2px;
              margin-right: 10px;
            }
          `}
      </style>
    </nav>
  );
};
