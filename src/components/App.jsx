import React from "react";
import contacts from "../contacts.js";
import Card from "./Card";

contacts.forEach(function (contact) {
  let names = contact.name;
  console.log(names);
});

function App() {
  return (
    <Card
      name={contacts[0].name}
      imgURL={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
    />
  );
}

export default App;
