import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import React,{useState,useEffect, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import UsersDataService from '../../Service/users';
import DonationReqService from '../../Service/donationReq.js';
import * as backend from '../../build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';
import { AppContext } from '../../State_Management/app_state';
const reach = loadStdlib("ALGO");

export default function CardsDonorComponent(props) {
  const appContext = useContext(AppContext);
  const [userData,setUserData] = useState('');
  const [donatedAmt,setDonateAmt] = useState(0);
  
  const getData = async() =>{
    //Get user who made the request
    const getNeedyName = await UsersDataService.getAllUsers();
    const filterNeedyName = getNeedyName.docs.filter((doc) => doc.id === props.donationData["userId"])
    setUserData(filterNeedyName[0].data()["first_name"])
  }

  const donate = async (amount) =>{
    console.log(amount);
  } 

  const handleDonate = async() =>{
    const db = parseInt(props.donationData["donated_amount"]);
    const r = parseInt(props.donationData["amount"]);
    if(parseInt(parseInt(db) + parseInt(donatedAmt)) <= parseInt(r)){
      //TODO MAKE SURE THAT THE DONOR DOES NOT DONATE MORE THAN HIS/HER BALANCE
      const donates = parseInt(r) - (parseInt(r) - (parseInt(db) + parseInt(donatedAmt)))
      const ctc = appContext.state.account.contract(backend, JSON.parse(props.donationData["info"]));
      const Donates = reach.parseCurrency(donatedAmt);
      //backend.Donors(ctc,{Donates});
      await ctc.apis.Donors.Donates(Donates);
      //backend._Participants.Donors_Donates(ctc,{donate});
      await DonationReqService.updateDonationReq(props.donationData["id"],{donated_amount:parseInt(donates)});
      props.setHasDonate(!props.hasDonated)
    }else{
      await DonationReqService.updateDonationReq(props.donationData["id"],{isClosed:true,hasStarted:false});
      console.log("Donated more that what is left")
    }
  }

  const handleView = async() =>{
    props.setViewTx(true)
    props.setDonationReq(props.donationData["id"])
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <Card style={{ width: '18rem',margin:"3px" }}>
      <Card.Header>
          <MDBRow>
            <MDBCol>{userData}</MDBCol>
            <MDBCol className='text-primary fs-8'>Requested:{props.donationData["amount"]} AlGO</MDBCol><MDBCol className='text-secondary fs-7'>Donated: {props.donationData["donated_amount"]} AlGO</MDBCol>
          </MDBRow>
      </Card.Header>
      <Card.Body>
        <Card.Title>{props.donationData["title"]}</Card.Title>
        <Card.Text>
            {props.donationData["description"][0]}
            <div><h4>Support us by donating</h4></div>
        </Card.Text>
        <Form.Control type="number" placeholder="How much do you want to donate" value={donatedAmt} onChange={(e) => setDonateAmt(e.target.value)}/>
        <Button variant="primary" className='mt-2' onClick={handleDonate}>Donate</Button>
        <Button variant="infor" className='mt-2' onClick={handleView}>View Transactions</Button>
      </Card.Body>
    </Card>
  )
}
