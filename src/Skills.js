import React from "react";

function Skills() {
  return (
    <div className="container-fluid text-light " id="skills">
      <div className="row mt-5 justify-content-evenly align-items-start border">
        <div className="col-12 col-md-5 py-3 border-end border-bottom">
          <h5 className=" fw-bold ">SKILLS</h5>
          <ul>
            <li className="">Virtual Reality (VR) development</li>
            <li>
              <u>Platforms:</u> Oculus quest 2 & 3.
            </li>
            <li>
              <u>Game Engine:</u> Unity, Unreal Engine
            </li>
            <li>
              <u>Programming Language:</u> C#, C++
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 py-3">
          <h5 className="fw-bold">EDUCATION</h5>
          <div className="">
            B.tech in Computer Science and Engineering (2023)
          </div>
          <div>Higher Secondary in Computer Science (2019)</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
