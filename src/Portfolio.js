import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="position-relative bg-transparent" id="portfolio">
      <div className="container" style={{ zIndex: 5 }}>
        <div className="fs-2 my-4 text-center text-light fw-bold fst-italic">
          Personal Work
        </div>
        <div className="mb-3 row justify-content-center align-items-center">
          <Link className="col-10 col-sm-6 col-lg-4 p-3" to="/detail/1">
            <div className="bimg text-light bg-dark w-100 d-flex flex-column justify-content-end align-items-center">
              <img
                src="pphoto/snake.png"
                className="w-100"
                alt=""
                style={{
                  height: "250px",
                }}
              />
              <div className="fs-4 fw-bold fst-italic">Snake Game</div>
            </div>
          </Link>
          <Link to="/detail/2" className="col-10 col-sm-6 col-lg-4 p-3">
            <div className="bimg text-light bg-dark w-100 d-flex flex-column justify-content-end align-items-center">
              <img
                src="pphoto/card.png"
                className="w-100"
                alt=""
                style={{ height: "250px" }}
              />
              <div className="fs-4 fw-bold fst-italic">Merlin Demon War</div>
            </div>
          </Link>
          <Link to="/detail/3" className="col-10 col-sm-6 col-lg-4 p-3">
            <div className="bimg text-light bg-dark w-100 d-flex flex-column justify-content-end align-items-center">
              <img
                src="pphoto/pingpong.png"
                className="w-100"
                alt=""
                style={{ height: "250px" }}
              />
              <div className="fs-4 fw-bold fst-italic">Ping Pong</div>
            </div>
          </Link>
        </div>
        <div className="fs-2 my-5 text-center text-light fw-bold fst-italic">
          Professional Work
        </div>
        <div className="row justify-content-center align-items-center">
          <Link to="/detail/5" className="col-10 col-sm-6 col-lg-4 p-3">
            <div className="bimg text-light bg-dark w-100 d-flex flex-column justify-content-end align-items-center">
              <img
                src="/pphoto/v20 logo setup.png"
                className="w-100"
                alt=""
                style={{ height: "250px" }}
              />
              <div className="fs-4 fw-bold fst-italic">V20 Cricket</div>
            </div>
          </Link>
          <Link to="/detail/4" className="col-10 col-sm-6 col-lg-4 p-3">
            <div className="bimg text-light bg-dark w-100 d-flex flex-column justify-content-end align-items-center">
              <img
                src="/pphoto/ZF.png"
                className="w-100"
                alt=""
                style={{ height: "250px" }}
              />
              <div className="fs-4 fw-bold fst-italic">Zombie Fury</div>
            </div>
          </Link>
          <Link to="/detail/6" className="col-10 col-sm-6 col-lg-4 p-3">
            <div className="bimg text-light bg-dark w-100 d-flex flex-column justify-content-end align-items-center">
              <img
                src="/pphoto/HORRnail.png"
                className="w-100"
                alt=""
                style={{ height: "250px" }}
              />
              <div className="fs-4 fw-bold fst-italic">Horror Game</div>
            </div>
          </Link>
        </div>
        <div className="fs-2 my-4 text-center text-light fw-bold fst-italic">
          Level Designing
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
