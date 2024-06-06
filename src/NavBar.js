import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  // const [backgroundColor, setBackgroundColor] = useState("transparent");

  useEffect(() => {
    // const handleScroll = () => {
    //   const scrollHeight = document.documentElement.scrollTop;
    //   const triggerHeight = 20;
    //   if (scrollHeight > triggerHeight) {
    //     setBackgroundColor("rgb(0,0,0)");
    //   } else {
    //     setBackgroundColor("rgb(0,0,0)");
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className="navbar navbar-expand-sm fixed-top bg-black border-bottom
      "
    >
      <div className="container-fluid p-0">
        <a className="navbar-brand text-light ms-4 fs-6" href="/">
          SANJITH
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#myList"
          aria-controls="myList"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse p-0 navbar-collapse p-2 justify-content-end"
          id="myList"
        >
          <ul className="navbar-nav me-4 fs-6 ">
            <li className="nav-item active ">
              <HashLink to="/#home" className="nav-link text-light">
                HOME
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#portfolio" className="nav-link text-light">
                PORTFOLIO
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#about" className="nav-link text-light">
                ABOUT
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#skills" className="nav-link text-light">
                SKILLS
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink to="/#contact" className="nav-link text-light">
                CONTACT
              </HashLink>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1IsKcmam4kA-vlkHzqaEdOym2s2KTbEtf/view?usp=sharing"
                className="nav-link text-light"
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
