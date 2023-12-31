import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Userdetails.css"

const UserDetails = () => {
  const userDetails = useLoaderData();
  const {firstName, lastName, image, username, phone, gender, domain, userAgent, age} = userDetails;
//   const {gender} = userDetails.company;

  console.log(userDetails);
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
          <button className="btn btn-secondary">
            <img
              src={image}
              height={100}
              width={100}
            />
          </button>
          <span className="name mt-3">{firstName + " " + lastName}</span>{" "}
          <span className="idd">@{username}</span>{" "}
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <span className="idd1">{phone}</span>{" "}
            <span>
              <i className="fa fa-copy" />
            </span>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            <span className="number">
              {gender} <span className="follow">Gender</span>
            </span>
          </div>
          <div className=" d-flex mt-2">
            <button className="btn1 btn-dark">{userDetails.company.department}</button>{" "}
          </div>
          <div className="text mt-3">
            <span>
              {userAgent}
              <br />
              <br /> 
              <b>Address: </b>{userDetails.address.city}
            </span>
          </div>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            <span>
              <i className="fa fa-twitter" />
            </span>
            <span>
              <i className="fa fa-facebook-f" />
            </span>
            <span>
              <i className="fa fa-instagram" />
            </span>
            <span>
              <i className="fa fa-linkedin" />
            </span>
          </div>
          <div className=" px-2 rounded mt-4 date ">
            
            <span className="join">{age} yeare's old</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
