import React from "react";

function Contact() {
  return (
    <div className="container-fluid text-light bg-black" id="contact">
      <div className="d-flex flex-column justify-content-center align-items-center p-3">
        <div className="text-center fs-3">Contact</div>
        <ul className="d-flex justify-content-center align-items-end mt-2 ">
          <a href="https://wa.me/+916381479445">
            <li className="mx-md-5 mx-2 text-light">
              <i className="bi bi-whatsapp fs-1"></i>
            </li>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=p.sanjith2001@gmail.com">
            <li className="mx-md-5 mx-2 text-light">
              <i className="bi bi-envelope-fill fs-1"></i>
            </li>
          </a>
          <a href="https://linkedin.com/in/sanjith27">
            <li className="mx-md-5 mx-2 text-light">
              <i className="bi bi-linkedin fs-1"></i>
            </li>
          </a>
        </ul>
      </div>
      <div className="fs-5 text-center">© 2024 By Sanjith</div>
    </div>
  );
}

export default Contact;
