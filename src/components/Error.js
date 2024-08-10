import React from "react";

function Error({ message, onRetry }) {
  return (
    <div className="errorContainer subContainer active">
      <img src="./Images/not-found.png" alt="Error" />
      <p>{message}</p>
      <button className="btn" onClick={onRetry}>
        Retry Now
      </button>
    </div>
  );
}

export default Error;
