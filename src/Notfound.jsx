import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import nocvjpg from "../src/assets/nocv.jpg";

const Notfound = () => {
  return (
    <>
      <div className="card mb-3">
        <img
          src={nocvjpg}
          height="530px"
          className="card-img-top"
          alt="..."
        />
      </div>
    </>
  );
};

export default Notfound;
