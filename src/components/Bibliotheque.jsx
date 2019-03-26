import React from "react";
import Livre from "./Livre";

const data = [
  {
    intitule: "Harry Potter 1",
    auteur: "J.K.Rowling"
  },
  {
    intitule: "Harry Potter 2",
    auteur: "J.K.Rowling"
  },
  {
    intitule: "Harry Potter 3",
    auteur: "J.K.Rowling"
  },
  {
    intitule: "Harry Potter 4",
    auteur: "J.K.Rowling"
  },
  {
    intitule: "Harry Potter 5",
    auteur: "J.K.Rowling"
  },
  {
    intitule: "Harry Potter 7",
    auteur: "J.K.Rowling"
  },
  {
    intitule: "Harry Potter 7",
    auteur: "J.K.Rowling"
  }
];

class Bibliotheque extends React.Component {
  render() {
    return (
      <ul>
        {data.map((bouquin, idx) => {
          return (
            <Livre
              key={idx}
              cle={idx}
              titre={bouquin.intitule}
              auteur={bouquin.auteur}
            />
          );
        })}
      </ul>
    );
  }
}
export default Bibliotheque;
