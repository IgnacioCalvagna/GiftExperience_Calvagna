import React from "react";
import { Spinner, Button } from "react-bootstrap";
const Loading = () => {
  return (
    <>
      <Button variant="dark" disabled>
        Loading...
        {"    "}
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
      </Button>
    </>
  );
};

export default Loading;
