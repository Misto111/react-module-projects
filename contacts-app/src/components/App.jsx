import React from "react";
import Header from "./Header";
import Contact from "./Contact";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <Header title="Contact 1" />
      <Contact
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Header title="Contact 2" />
      <Contact
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
       <Header title="Contact 3" />
      <Contact
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
