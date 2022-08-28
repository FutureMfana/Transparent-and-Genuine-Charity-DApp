import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React,{useState,useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DonationReqService from '../../Service/donationReq';
import UsersDataService from '../../Service/users';
import { AppContext } from '../../State_Management/app_state';
import * as backend from '../../build/index.main.mjs'
export default function CardsComponent(props) {
  const appContext = useContext(AppContext);
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

  const ApproveDonation = () =>{
    return true;
  }

  const handleStatus = async(id,accepted_status) => {
    //Attach to the contract only in accepted status
    if(accepted_status == "accepted"){
      const ctc = appContext.state.account.contract(backend, JSON.parse(props.donationData["info"]));
      backend.Verifier(ctc,{ApproveDonation})
      await DonationReqService.updateDonationReq(id,{accepted_status:accepted_status});
    }else{
      await DonationReqService.updateDonationReq(id,{accepted_status:accepted_status,info:""});
    }
    //accepted_status
    props.setChangedStatus(!props.changedStatus);
    
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
     
    </Card>
  )
}
//<Button variant="success" className='me-3' onClick={() => handleStatus(props.donationData["id"],"accepted")} >Accept</Button><Button variant="danger">Reject</Button>