import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learMore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 align-middle p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="mt-5">{productDescription}</p>
          <div>
            <a href={learMore}>
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>
           
          </div>
          
        </div>
        
        <div className="col-2"></div>

        <div className="col-5 p-5">
          <img src={imageURL} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default RightSection;
