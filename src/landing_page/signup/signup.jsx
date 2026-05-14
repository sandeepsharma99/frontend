import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-5 mb-5 align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-7 p-5 text-center">
          <img
            src="media/images/signup.png"
            alt="Signup Illustration"
            style={{ maxWidth: "100%", height: "auto" }}
            onError={(e) => (e.target.style.display = 'none')} // Hides if image is missing
          />
        </div>

        {/* Right Side: Signup Form */}
        <div className="col-md-5 p-5">
          <h1 className="mb-3 fs-2">Signup now</h1>
          <p className="text-muted mb-4">Or track your existing application.</p>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Create a strong password" required />
            </div>
            
            <button type="submit" className="btn btn-primary w-100 fs-5" style={{ backgroundColor: "#387ed1", border: "none" }}>
              Continue
            </button>
          </form>

          <p className="text-center mt-4 text-muted">
            Already have an account? <Link to="/login" style={{ textDecoration: "none" }}>Login here</Link>
          </p>

          <p className="text-muted mt-4" style={{ fontSize: "12px", lineHeight: "1.5" }}>
            I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.<br /><br />
            If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the <Link to="#" style={{ textDecoration: "none" }}>offline forms</Link>. For help, <Link to="/support" style={{ textDecoration: "none" }}>click here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;