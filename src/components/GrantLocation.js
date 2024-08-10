import React from "react";

function GrantLocation({ onGrant }) {
  return (
    <div className="grantLocationContainer subContainer active">
      <img src="./Images/location.png" alt="Location" width="80" height="80" />
      <p>Grant Location Access</p>
      <p>Allow access to get weather information</p>
      <button className="btn" onClick={onGrant}>
        Grant Access
      </button>
    </div>
  );
}

export default GrantLocation;
