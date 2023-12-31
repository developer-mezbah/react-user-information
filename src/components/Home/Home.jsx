import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const users = useLoaderData();
  return (
    <>
      <br />
      <br />
      <br />
      <h1 className="container">All User Information</h1>
      <br />
      <br />
      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="our_solution_category">
              <div className="solution_cards_box">
                {users &&
                  users.users.map((user) => (
                    <div key={user.id} className="solution_card">
                      <div className="hover_color_bubble" />
                      <div className="so_top_icon">
                        <img src={user.image} alt="" />
                      </div>
                      <div className="solu_title">
                        <h3>{user.firstName + " " + user.lastName}</h3>
                      </div>
                      <div className="solu_description">
                        <p>
                          <b>Address: </b>
                          {user.address.address}
                        </p>

                        <p>
                          <b>Email: </b>
                          {user.email}
                        </p>

                        <p>
                          <b>Company Name: </b>
                          {user.company.name}
                        </p>
                        <p>
                          <b>Department: </b>
                          {user.company.department}
                        </p>
                        <Link to={`user-details/${user.id}`}>
                          <button type="button" className="read_more_btn">
                            More Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
