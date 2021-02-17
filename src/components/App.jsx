import React from "react";
import contacts from "../contacts.js";
import Card from "./Card";

contacts.forEach(function (contact) {
  let names = contact.name;
  console.log(names);
});

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
