import React, { useState } from "react";
import Pdfcv from "./Pdfcv";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Hello = () => {
  const [data, setdata] = useState({});
  const [imagedata, setimagedata] = useState("");

  const convert_tobase64 = (e) => {
    const filetarget = e.target.files[0];
    const MAX_IMG_SIZE = 1;
    if (filetarget.size > 0) {
      const fileSizeMb = filetarget.size / 1024 ** 2;

      if (fileSizeMb > MAX_IMG_SIZE) {
        alert(`Too big! Select an image under ${MAX_IMG_SIZE} MB!`);
      } else {
        let reader = new FileReader();
        reader.readAsDataURL(filetarget);
        reader.onload = () => {
          setimagedata(reader.result);
        };
        reader.onerror = (error) => {
          console.log(error);
        };
      }
    }
  };

  const handelinput = (val) => {
    const { name, value } = val.target;
    setdata((values) => ({ ...values, [name]: value }));
  };
  const datasubmit = async (e) => {
    e.preventDefault();
    let obj = { image: imagedata };
    let formobj = data;
    let imgobj = obj;
    let fiobj;
    if (obj.image == "") {
      fiobj = formobj;
    } else {
      fiobj = { ...imgobj, ...formobj };
    }

    const response = await fetch("https://cv-server-n6bz.onrender.com/api", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fiobj),
    });
    const firesponse = await response.json();
    toast(firesponse.post);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="alert alert-success text-center mt-1" role="alert">
          <strong>The Best Free Online Resume Builder</strong>
        </div>
      </div>

      <div className="row mb-5 mt-4 ">
        <Pdfcv />
      </div>

      <div className="card text-center">
        <div className="card-header">Personal Details</div>
        <div className="card-body">
          <form onSubmit={datasubmit}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  {imagedata == "" ? (
                    <i
                      className="fas fa-image"
                      style={{ fontSize: "100px", color: "green" }}
                    ></i>
                  ) : (
                    <img
                      src={imagedata}
                      height={200}
                      width={200}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  )}
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        *Choose Your Photo (image under 1 MB)
                      </label>
                      <input
                        accept="image/*"
                        onChange={convert_tobase64}
                        className="form-control"
                        type="file"
                        id="formFile"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="fname"
                    className="form-control"
                    placeholder="*Your Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="email"
                    name="emailid"
                    className="form-control"
                    placeholder="*Your Email_Id"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="fathername"
                    className="form-control"
                    placeholder="*Your Father Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="mothername"
                    className="form-control"
                    placeholder="*Your Mother Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="*Your Age"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="gender"
                    className="form-control"
                    placeholder="*Your gender"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="nationality"
                    className="form-control"
                    placeholder="*Your Nationality"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="contactno"
                    className="form-control"
                    placeholder="*Your Contact No"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="card-header">10th Academic Details</div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="teninstitutionname"
                className="form-control mt-3"
                placeholder="*10th ClassName Institution Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="tenboardname"
                className="form-control mt-3"
                placeholder="*10th ClassName Board Name"
                required
              />
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="tenpassyear"
                    className="form-control"
                    placeholder="*10th Passing Year"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="tenno"
                    className="form-control"
                    placeholder="*10th Number(%)"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="card-header">12th Academic Details</div>

            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="twelveinstitutionname"
                className="form-control mt-3"
                placeholder="*12th ClassName Institution Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="twelveboardname"
                className="form-control mt-3"
                placeholder="*12th ClassName Board Name"
                required
              />
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="twelvepassyear"
                    className="form-control"
                    placeholder="*12th Passing Year"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="twelveno"
                    className="form-control"
                    placeholder="*12th Number(%)"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="card-header">
              Graduation Degree Academic Details
            </div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="bdinstitutionname"
                className="form-control mt-3"
                placeholder="*Graduation Institution Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="bdboardname"
                className="form-control mt-3"
                placeholder="*Graduation Board Name"
                required
              />
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="bdpassyear"
                    className="form-control"
                    placeholder="*Graduation Passing Year"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="bdno"
                    className="form-control"
                    placeholder="*Graduation Number(%)"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="card-header">Master Degree Academic Details</div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="mdinstitutionname"
                className="form-control mt-3"
                placeholder="Master Degree Institution Name"
              />
            </div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="mdboardname"
                className="form-control mt-3"
                placeholder="Master Degree Board Name"
              />
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="mdpassyear"
                    className="form-control"
                    placeholder="Master Degree Passing Year"
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="mdno"
                    className="form-control"
                    placeholder="Master Degree Number(%)"
                  />
                </div>
              </div>
            </div>

            <div className="card-header">Skill</div>
            <div className="mb-3">
              <div className=" text-center">
                <div className="row">
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="skill1"
                      className="form-control mt-3"
                      placeholder="*What is Your skill1?"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="skill2"
                      className="form-control mt-3"
                      placeholder="What is Your skill2?"
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="skill3"
                      className="form-control mt-3"
                      placeholder="What is Your skill3?"
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="skill4"
                      className="form-control mt-3"
                      placeholder="What is Your skill4?"
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="skill5"
                      className="form-control mt-3"
                      placeholder="What is Your skill5?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">Strengths</div>
            <div className="mb-3">
              <div className=" text-center">
                <div className="row">
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="strengths1"
                      className="form-control mt-3"
                      placeholder="*What is Your Strengths1?"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="strengths2"
                      className="form-control mt-3"
                      placeholder="*What is Your Strengths2?"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="strengths3"
                      className="form-control mt-3"
                      placeholder="What is Your Strengths3?"
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="strengths4"
                      className="form-control mt-3"
                      placeholder="What is Your Strengths4?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">Hobby</div>
            <div className="mb-3">
              <div className=" text-center">
                <div className="row">
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="hobby1"
                      className="form-control mt-3"
                      placeholder="*What is Your hobby1?"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="hobby2"
                      className="form-control mt-3"
                      placeholder="*What is Your hobby2?"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="hobby3"
                      className="form-control mt-3"
                      placeholder="What is Your hobby3?"
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="hobby4"
                      className="form-control mt-3"
                      placeholder="What is Your hobby4?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">Language</div>
            <div className="mb-3">
              <div className=" text-center">
                <div className="row">
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="languageknown1"
                      className="form-control mt-3"
                      placeholder="*What language1 you known?"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="languageknown2"
                      className="form-control mt-3"
                      placeholder="*What language2 you known"
                      required
                    />
                  </div>

                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="languageknown3"
                      className="form-control mt-3"
                      placeholder="What language3 you known?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">Projects</div>
            <div className="mb-3 ">
              <div className=" text-center ">
                <div className="row ">
                  <div className="col ">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="project1name"
                      className="form-control mt-3 "
                      placeholder="*What is Your Project 1 Name?"
                      required
                    />
                  </div>

                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="project1detail"
                      className="form-control mt-3"
                      placeholder="*What is Your Project 1 Details?"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className=" text-center">
                <div className="row">
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="project2name"
                      className="form-control mt-3"
                      placeholder="What is Your Project 2 Name?"
                    />
                  </div>

                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="project2detail"
                      className="form-control mt-3"
                      placeholder="What is Your Project 2 Details?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">Certificate</div>
            <div className="mb-3 ">
              <div className=" text-center ">
                <div className="row ">
                  <div className="col ">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="coursename"
                      className="form-control mt-3 "
                      placeholder="What is Your Course Name?"
                    />
                  </div>

                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="organization"
                      className="form-control mt-3"
                      placeholder="What is Your Certificate Issuing organization Name?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className=" text-center">
                <div className="row">
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="credentialid"
                      className="form-control mt-3"
                      placeholder="What is Your Certificate Credential ID ?"
                    />
                  </div>

                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="credentialurl"
                      className="form-control mt-3"
                      placeholder="What is Your Project Credential URL?"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">Extracurricular Activities</div>
            <div className="mb-3 ">
              <div className=" text-center ">
                <div className="row ">
                  <div className="col ">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="activities1"
                      className="form-control mt-3 "
                      placeholder="Activities 1"
                    />
                  </div>

                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="activities2"
                      className="form-control mt-3"
                      placeholder="Activities 2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className=" text-center">
                <div className="row">
                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="activities3"
                      className="form-control mt-3"
                      placeholder="Activities 3"
                    />
                  </div>

                  <div className="col">
                    <input
                      onChange={handelinput}
                      type="text"
                      name="activities4"
                      className="form-control mt-3"
                      placeholder="Activities 4"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">Address</div>

            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="village"
                    className="form-control mt-3"
                    placeholder="*Village/City"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="policestation"
                    className="form-control mt-3"
                    placeholder="*Police Station"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="district"
                    className="form-control mt-3"
                    placeholder="*District"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="text"
                    name="state"
                    className="form-control mt-3"
                    placeholder="*State"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    onChange={handelinput}
                    type="number"
                    name="pin"
                    className="form-control mt-3"
                    placeholder="*Pincode"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <input
                onChange={handelinput}
                type="text"
                name="user_id"
                className="form-control mt-3"
                placeholder="*Give Any User_id"
                required
              />
              <input type="submit" className="btn btn-primary col-5 mt-3" />
            </div>
          </form>
        </div>
        <div className="card-footer text-muted">
          Copyright © 2024. All rights reserved. Devloped by{" "}
          <strong>Sumanta Das</strong>
        </div>
      </div>
      <ToastContainer position="top-left" />
    </>
  );
};

export default Hello;
