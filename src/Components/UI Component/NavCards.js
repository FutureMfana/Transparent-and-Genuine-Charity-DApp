import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function NavCards(props) {
  const [tab,selectedTab] =  useState(0);
  return (
    <Card style={{height:"72vh"}}>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#descr" onSelect={(selectedKey) => selectedTab(selectedKey)}>
          <Nav.Item>
            <Nav.Link href="#descr">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#verifier">Verifiers List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href="#donor">Donor List</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body style={{overflow:"scroll"}}>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          {props.donationData.length > 0 ? props.donationData[0]["description"][1] : ''}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NavCards;