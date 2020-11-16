import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Link className="btn btn-success text-white" to="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
