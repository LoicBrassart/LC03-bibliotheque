import React from "react";

class Livre extends React.Component {
  render() {
    return (
      <li>
        {this.props.titre}, by {this.props.auteur} (# {this.props.cle})
      </li>
    );
  }
}
export default Livre;
