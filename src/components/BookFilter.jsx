import { useState } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";
import horrorBooks from "../books/horror.json";
import romanceBooks from "../books/romance.json";
import scifiBooks from "../books/scifi.json";
import historyBooks from "../books/history.json";

const genres = {
  Fantasy: fantasyBooks,
  Horror: horrorBooks,
  Romance: romanceBooks,
  SciFi: scifiBooks,
  History: historyBooks,
};

function BookFilter() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = selectedGenre && genres[selectedGenre].filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Container className="mt-4">
      <Row className="mb-4 justify-content-center">
        {Object.keys(genres).map((genre) => (
          <Col key={genre} xs={6} sm={4} md={3} lg={2} className="mb-2">
            <Button
              variant={selectedGenre === genre ? "primary" : "dark"}
              className="w-100"
              onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
            >
              {genre}
            </Button>
          </Col>
        ))}
      </Row>

      {selectedGenre && (
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Cerca un libro..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </Form.Group>
      )}

      <Row>
        {filteredBooks &&
          filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="custom-card">
                <div className="card-img-container">
                  <Card.Img variant="top" src={book.img} alt={book.title} className="card-img" />
                </div>
                <Card.Body className="custom-card-body">
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>Prezzo: €{book.price.toFixed(2)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default BookFilter;
