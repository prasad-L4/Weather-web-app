import React from "react";


function SearchWeather() {

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center ">
          <div className="col-md-4">
            <div className="card text-white text-center  border-0">
              <img
                className="card-img"
                src="https://source.unsplash.com/900x900/?Nature,Water"
                alt="Card image"
              />
              <div className="card-img-overlay">
                <form>
                  <div className="input-group mb-4 w-75 mx-auto">
                    <input
                      type="text"
                      style={{ height: "100%" }}
                      className="form-control"
                      placeholder="Search City"
                      aria-label="Search City"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        type="sumbit"
                        style={{ height: "90%" }}
                        className="input-group-text"
                        id="basic-addon2"
                      >
                        {" "}
                        <i className="fas fa-search"></i>
                      </button>
                      
                    </div>
                  </div>
                </form>
                <div className="bg-dark bg-opacity-50 py-3">
                  <h2 className="card-title">Canada</h2>
                  <p className="card-text lead">Saturday,September 23,2023</p>
                  <hr />
                  <i className="fas fa-cloud fa-4x"></i>
                  <h1 className="fw-bolder mb-5">45.56 &deg;C</h1>
                  <p className="lead fw-bolder mb-0">Cloud</p>
                  <p className="lead">33.87&deg;C | 65.87&deg;C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchWeather;