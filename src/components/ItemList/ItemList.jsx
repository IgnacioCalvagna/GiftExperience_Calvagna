import React from "react";
import { Col, Row } from "react-bootstrap";

import Item from "../../common/Item/Item";
import "./itemList.css";

const ItemList = ({ productList }) => {
  const productos = productList.map((item, i) => {
    return (
      <Col className="item"  mb={6} key={i}>
        <Item item={item} />
      </Col>
    );
  });

  return (

        <Row >{productos}</Row>
  
  );
};

export default ItemList;
