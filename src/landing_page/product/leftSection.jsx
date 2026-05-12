import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learMore,
  googlePlay,
  appStore,
}) => { 
  return (
    <div className="container mt-5">
       
      <div className="row ">
        <div className="col-5 p-5">
            <img src={imageURL} alt="" />
        </div>
        <div className="col-2"></div>
        <div className="col-5 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div>
                <a href={tryDemo}>Try Demo<i className="fa-solid fa-arrow-right"></i></a>
                <a href={learMore} style={{marginLeft:"50px"}}>Lean More<i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="mt-3">
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                <a href={appStore}  style={{marginLeft:"50px"}}> <img src="media/images/appstoreBadge.svg" alt="" /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
