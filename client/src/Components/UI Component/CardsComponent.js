import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DonationReqService from '../../Service/donationReq';
import UsersDataService from '../../Service/users';

export default function CardsComponent(props) {
  const [isStatusChanged,setisStatusChanged] = useState(false);
  const [userData,setUserData] = useState('');
  const getData = async() =>{
    //Get user who made the request

    const getNeedyName = await UsersDataService.getAllUsers();
    const filterNeedyName = getNeedyName.docs.filter((doc) => doc.id == props.donationData["userId"])
    setUserData(filterNeedyName[0].data()["first_name"])
  }

  useEffect(() => {
    getData();
  }, [])

  const handleStatus = async(id,accepted_status) => {
    const updateStatus = await DonationReqService.updateDonationReq(id,{accepted_status:accepted_status});
    //accepted_status
    props.setChangedStatus(!props.changedStatus);
    console.log(id,accepted_status)
  }

  return (
    <Card style={{ width: '18rem',margin:"3px" }}>
      <Card.Header>
          <MDBRow>
            <MDBCol>{userData}</MDBCol>
            <MDBCol className='text-primary'>{props.donationData["amount"]} AlGO</MDBCol>
          </MDBRow>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.donationData["title"]}</Card.Title>
        <Card.Text>
            {props.donationData["description"][0]}
            <div>Do you want to support us?</div>
        </Card.Text>
        {isStatusChanged ? '' : <>
        <Button variant="success" className='me-3' onClick={() => handleStatus(props.donationData["id"],"accepted")} >Accept</Button><Button variant="danger" onClick={() => handleStatus(props.donationData["id"],"rejected")}>Reject</Button>
        </>}
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}
//<Button variant="success" className='me-3' onClick={() => handleStatus(props.donationData["id"],"accepted")} >Accept</Button><Button variant="danger">Reject</Button>