import React from "react";
import contacts from "../contacts.js";
import Card from "./Card";
console.log(contacts[1]);

{
  /* <Card
  name="Beyonce"
  image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
  tel="+123 456 789"
  email="b@beyonce.com"
/>; */
}

function App() {
  return (
    <Card
      name="Beyonce"
      imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
  );
}

export default App;
