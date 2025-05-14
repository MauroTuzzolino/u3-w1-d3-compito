import React from "react";
import Card from "react-bootstrap/Card";

const SingleBook = ({ book }) => {
  return (
    <Card style={{ width: "18rem" }} className="custom-card">
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          className="card-img"
        />
      </div>
      <Card.Body className="custom-card-body">
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;