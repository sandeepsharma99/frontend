import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 border-top ">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-3  text-muted  "
        style={{ fontSize: "1.2em", lineHeight: "1.8" }}
      >
        <div className="col-6 p-5 mt-2 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt=""
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nitin Kamat</h4>
          <h5>Founder, CEO</h5>
        </div>
        
        <div className="col-6 p-5 ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>

          <p>Connect on <a href="" className="text-decoration-none">Homepage</a> / <a href="" className="text-decoration-none">TradingQnA</a> / <a href="" className="text-decoration-none">Twitter</a></p>
        </div>
      </div>
    </div>
  );
};

export default Team;
