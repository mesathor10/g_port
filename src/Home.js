import React from "react";

function Home() {
  return (
    <div className=" mt-5 bg_home" id="home">
      <div className="intro d-flex justify-content-sm-between justify-content-center h-100 w-100 align-items-center">
        <div className="d-none d-sm-block"></div>
        <div className="me-sm-5  d-flex flex-column align-items-end">
          <div
            className="text-light display-4 rot"
            style={{ textShadow: "2px 2px 0px blue" }}
          >
            Sanjith
          </div>
          <div
            className="fs-2 tr text-light"
            style={{ textShadow: "2px 2px 0px blue" }}
          >
            Game Developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
