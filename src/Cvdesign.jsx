import React, { useRef } from "react";
import "./cvdesign.css";
import Cvdownload from "./Cvdownload";

const Cvdesign = (params) => {
  const pdfref = useRef();
  const {
    image,
    fname,
    emailid,
    fathername,
    mothername,
    age,
    gender,
    nationality,
    contactno,
    teninstitutionname,
    tenboardname,
    tenpassyear,
    tenno,
    twelveinstitutionname,
    twelveboardname,
    twelvepassyear,
    twelveno,
    bdinstitutionname,
    bdboardname,
    bdpassyear,
    bdno,
    mdinstitutionname,
    mdboardname,
    mdpassyear,
    mdno,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    strengths1,
    strengths2,
    strengths3,
    strengths4,
    hobby1,
    hobby2,
    hobby3,
    hobby4,
    languageknown1,
    languageknown2,
    languageknown3,
    project1name,
    project1detail,
    project2name,
    project2detail,
    credentialurl,
    credentialid,
    organization,
    coursename,
    activities1,
    activities2,
    activities3,
    activities4,
    village,
    policestation,
    district,
    state,
    pin,
  } = params.userdata;

  return (
    <>
      <div ref={pdfref} className="wrapper">
        <div className="intro">
          <div className="profile">
            <div className="bio">
              <h4 className="name">CURRICULUM VITAE</h4>
            </div>
            <div className="photo">
              <img src={image} />
            </div>
          </div>
          <div className="intro-section about">
            <h1 className="title">Personal Details</h1>
            <p>
              <i className="fas fa-user-check" style={{ color: "#4682bf" }}></i>{" "}
              Name : <span className="text-break">{fname}</span>
            </p>
            <p className="paragraph">
              <i className="fas fa-user-check" style={{ color: "#4682bf" }}></i>{" "}
              FName : <span className="text-break">{fathername}</span>
            </p>
            <p className="paragraph">
              <i className="fas fa-user-check" style={{ color: "#4682bf" }}></i>{" "}
              MName : <span className="text-break">{mothername}</span>
            </p>
            <p className="paragraph">
              <i className="fas fa-user-check" style={{ color: "#4682bf" }}></i> Age
              : <span className="text-break">{age}</span>
            </p>
            <p className="paragraph">
              <i className="fas fa-user-check" style={{ color: "#4682bf" }}></i>{" "}
              Gender : <span className="text-break">{gender}</span>
            </p>
            <p className="paragraph">
              <i className="fas fa-user-check" style={{ color: "#4682bf" }}></i>{" "}
              Nationality : <span className="text-break">{nationality}</span>
            </p>
            <p className="paragraph">
              <i className="fas fa-phone" style={{ color: "#4682bf" }}></i>{" "}
              <span className="text-break">{contactno}</span>
            </p>
            <p className="paragraph">
              <i className="fa fa-envelope" style={{ color: "#4682bf" }}></i>{" "}
             <span className="text-break">{emailid}</span>
            </p>
          </div>

          <div className="intro-section contact">
            <h1 className="title">Strengths</h1>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-user-shield"></i> {strengths1}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-user-shield"></i> {strengths2}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-user-shield"></i> {strengths3}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-user-shield"></i> {strengths4}
              </p>
            </div>
          </div>
          <div className="intro-section contact">
            <h1 className="title">language Known</h1>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-american-sign-language-interpreting"></i>{" "}
                {languageknown1}
              </p>

              <span></span>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-american-sign-language-interpreting"></i>{" "}
                {languageknown2}
              </p>
            </div>

            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-american-sign-language-interpreting"></i>{" "}
                {languageknown3}
              </p>
            </div>
          </div>
          <div className="intro-section contact">
            <h1 className="title">Hobby</h1>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-h-square"></i> {hobby1}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-h-square"></i> {hobby2}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-h-square"></i> {hobby3}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-h-square"></i> {hobby4}
              </p>
            </div>

           
          </div>
          <div className="intro-section contact">
            <h1 className="title">Address</h1>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-map-marker-alt"></i>
                Vill- {village}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-map-marker-alt"></i>
                Policestation- {policestation}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-map-marker-alt"></i>
                District-{district}
              </p>
            </div>
            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-map-marker-alt"></i>
                State- {state}
              </p>
            </div>

            <div className="info-section">
              <p className="paragraph">
                <i className="fas fa-map-marker-alt"></i>
                Pincode-{pin}
              </p>
            </div>
          </div>
        </div>

        <div className="detail">
          <div className="detail-section edu">
            <div className="detail-title">
              <div className="title-icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <span>Education</span>
            </div>
            <div className="detail-content">
              <div className="timeline-block">
                <h1>10th Class</h1>
                <p>SchoolName : {teninstitutionname}</p>
                <p>BoardName : {tenboardname}</p>
                <p>Percentage : {tenno}</p>
                <p>PassingYear : {tenpassyear}</p>
              </div>

              <div className="timeline-block">
                <h1>12th Class</h1>
                <p>SchoolName : {twelveinstitutionname}</p>
                <p>BoardName : {twelveboardname}</p>
                <p>Percentage : {twelveno}</p>
                <p>PassingYear : {twelvepassyear}</p>
              </div>
              <div className="timeline-block">
                <h1>Bachelor's Degree</h1>
                <p>CollageName : {bdinstitutionname}</p>
                <p>UniversityName : {bdboardname}</p>
                <p>Percentage : {bdno}</p>
                <p>PassingYear : {bdpassyear}</p>
              </div>
              <div className="timeline-block">
                <h1>Master's Degree</h1>
                <p>CollageName : {mdinstitutionname}</p>
                <p>UniversityName : {mdboardname}</p>
                <p>Percentage : {mdno}</p>
                <p>PassingYear : {mdpassyear}</p>
              </div>
            </div>
          </div>

          <div className="detail-section edu">
            <div className="detail-title">
              <div className="title-icon">
                <i className="fas fa-code"></i>
              </div>
              <span>Skill</span>
            </div>
            <div className="detail-content">
              <div className="timeline-block">
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {skill1}
                </p>
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {skill2}
                </p>
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {skill3}
                </p>
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {skill4}
                </p>
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {skill5}
                </p>
              </div>
            </div>
          </div>
          <div className="detail-section edu">
            <div className="detail-title">
              <div className="title-icon">
                <i className="fas fa-file-alt"></i>
              </div>
              <span>Projects</span>
            </div>
            <div className="detail-content">
              <div className="timeline-block">
                <p>
                  ProjectName {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {project1name}
                </p>
                <p>
                  ProjectDetails {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {project1detail}
                </p>

                <p>
                ProjectName {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {project2name}
                </p>
                <p>
                ProjectDetails {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {project2detail}
                </p>
              </div>
            </div>
          </div>
          <div className="detail-section edu">
            <div className="detail-title">
              <div className="title-icon">
                <i className="fas fa-award"></i>
              </div>
              <span>Certification</span>
            </div>
            <div className="detail-content">
              <div className="timeline-block">
                <p>
                Course Name : {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {coursename}
                </p>
                <p>
                Issuing organization : {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {organization}
                </p>
                <p>
                CredentialID : {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {credentialid}
                </p>
                
                <p>
                Credentialurl : {" "}
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {credentialurl}
                </p>
              </div>
            </div>
          </div>
          <div className="detail-section edu">
            <div className="detail-title">
              <div className="title-icon">
                <i className="far fa-calendar-check"></i>
              </div>
              <span>Extracurricular Activities</span>
            </div>
            <div className="detail-content">
              <div className="timeline-block">
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {activities1}
                </p>
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {activities2}
                </p>
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {activities3}
                </p>
                <p>
                  <i
                    className="fa fa-check-circle"
                    style={{ color: "#4682bf" }}
                  ></i>
                  &nbsp;
                  {activities4}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cvdownload pdfref={pdfref} cvname={fname} />
    </>
  );
};

export default Cvdesign;
