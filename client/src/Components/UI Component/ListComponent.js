import React,{useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export default function ListComponent(props) {
  
  return (
    <ListGroup variant="flush">
      {props.donationData.map((data) =>{
        if(data["accepted_status"] !== "waiting"){
          return <Items data={data} />          
        }else{
          console.log("hhh")
        }
      })}
    </ListGroup>
  )
}


export const Items = (props) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div className="">
        <div className="fw-bold">{props.data["title"]}</div>
      </div>
      <Badge bg={props.data["accepted_status"] === "accepted" ? "success": "danger"}>{props.data["accepted_status"] === "accepted" ? "Approved": "Denied"}</Badge>
    </ListGroup.Item>
  )
}

{/*
donData["accepted_status"]
<ListGroup.Item
        className="d-flex justify-content-between align-items-start"
      >
        <div className="">
          <div className="fw-bold">Water Donation</div>
          Vusi Thembekwayo
        </div>
        <Badge bg="success">Success</Badge>
      </ListGroup.Item>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
      >
        <div className="">
          <div className="fw-bold">Water Donation</div>
          Vusi Thembekwayo
        </div>
        <Badge bg="danger">Dismissed</Badge>
      </ListGroup.Item>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
      >
        <div className="">
          <div className="fw-bold">Water Donation</div>
          Vusi Thembekwayo
        </div>
        <Badge bg="danger">Dismissed</Badge>
      </ListGroup.Item>
      <ListGroup.Item
        className="d-flex justify-content-between align-items-start"
      >
        <div className="">
          <div className="fw-bold">Water Donation</div>
          Vusi Thembekwayo
        </div>
        <Badge bg="success">Success</Badge>
      </ListGroup.Item> */}