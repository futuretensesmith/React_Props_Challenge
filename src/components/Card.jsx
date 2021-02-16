import React from "react";
import contacts from "../contacts";

function Card(prop) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <img className="circle-img" src={prop.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{prop.phone}</p>
          <p>{prop.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
