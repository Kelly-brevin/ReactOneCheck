import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = ""; // Set this to your name to test behavior

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card
        style={{ width: "22rem", textAlign: "center" }}
        className="shadow-lg p-4 bg-light rounded"
      >
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <h2 className="mt-3">Hello, {firstName ? firstName : "there"}!</h2>

      {firstName && (
        <img
          src="https://via.placeholder.com/100"
          alt="User"
          className="mt-3 rounded-circle border border-primary p-1"
        />
      )}
    </Container>
  );
}

export default App;
