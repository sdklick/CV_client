import React, { useState } from "react";
import Cvdesign from "./Cvdesign";
import Notfound from "./Notfound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Updatecv from "./Updatecv";

const Pdfcv = () => {
  const [iddata, setiddata] = useState("");
  const [resdata, setresdata] = useState("");

  const dataget = async () => {
    if (iddata == "") {
      toast("Please Enter User_id");
    } else {
      const response = await axios.get("https://cv-server-n6bz.onrender.com/api/getdata", {
        params: {
          ID: iddata,
        },
      });

      setresdata(response.data[0]);
    }
  };

  const deletecv = async () => {
    
    let a = confirm("Are You Sure Delete Your CV");
    if (a == true) {
      if (iddata == "") {
        toast("Please Enter User_id");
      } else {
        const res = await axios.delete("http://localhost:2000/api/deletedata", {
          params: { Id: iddata },
        });
        if (res.data.deletedCount == 0) {
          toast("Not Found Your CV");
        } else {
          toast("your Cv Delete Successfully");
        }
      }
    }
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Your User_id"
              onChange={(v) => {
                setiddata(v.target.value);
              }}
            />
          </div>
          <div className="col-8">
            <div className="container text-center">
              <div className="row">
                <div className="col d-grid gap-2">
                  <button
                    onClick={dataget}
                    type="button"
                    className="btn btn-primary mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Get CV
                  </button>
                </div>
                <div className="col d-grid gap-2">
                  <button
                    type="button"
                    className="btn btn-warning mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    Update
                  </button>
                </div>
                <div className="col d-grid gap-2">
                  <button
                    onClick={deletecv}
                    type="button"
                    className="btn btn-danger mt-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* get modal */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {resdata === undefined || resdata === "" ? (
                  <span className="title">😔</span>
                ) : (
                  `${resdata.fname} CV`
                )}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {resdata === undefined || resdata === "" ? (
                <Notfound />
              ) : (
                <Cvdesign userdata={resdata} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* update modal */}

      <div
        className="modal fade "
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel1"></h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <Updatecv />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-left" />
    </>
  );
};

export default Pdfcv;
