import React from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;