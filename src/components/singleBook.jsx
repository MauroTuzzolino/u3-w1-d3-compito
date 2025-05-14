import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card className={`custom-card ${selected ? "selected" : ""}`} onClick={this.toggleSelected}>
        <div className="card-img-container">
          <Card.Img variant="top" src={book.img} alt={book.title} className="card-img" />
        </div>
        <Card.Body className="custom-card-body">
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text>Prezzo: €{book.price.toFixed(2)}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
