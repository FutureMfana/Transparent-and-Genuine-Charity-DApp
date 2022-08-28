import { MDBContainer, MDBRow,MDBBtn, MDBCol} from 'mdb-react-ui-kit'
import React,{useState,useEffect,useContext} from 'react'
import DonationReqService from '../../../Service/donationReq'
import MenuComponent from '../../UI Component/MenuComponent'
import NavCards from '../../UI Component/NavCards'
import AddDonationModalBox from './Indigent Users/AddDonationModal'
import { AppContext } from '../../../State_Management/app_state'


//The MenuComponent needs modification so that it can be reusable
export default function Indigent() {
  const appContext = useContext(AppContext);
  const [donationReqId,setDonationReqId] = useState('');
  const [addDonation, setAddDonation] = useState(true);

  const getData = async() =>{
    const donationReqData = await DonationReqService.getDonationReqByUserId(appContext.state.userData[0]);
    if(donationReqData.docs.length === 1){
      donationReqData.docs.map((rec) => setDonationReqId(rec.id))
      setAddDonation(false);
    }
    
  }

  useEffect(() => {
    getData();
  }, [])

  return (

    <div >
        <MDBRow>
            <MenuComponent />
            {/* Donation Box: display donation, description, verifiers, and donors list  */}
            {addDonation ? <AddDonationModalBox setDonationReqId={setDonationReqId} setAddDonation={setAddDonation} /> : <DonationDisplay  donationReqId={donationReqId}/>}
        </MDBRow>
    </div>
  )
}



const DonationDisplay = (props) => {
  const [isDonationStarted, setIsDonationStarted] = useState(false);
  const [donationData,setDonationData] = useState([])
  const [status,getStatus] = useState('');
  const getData = async() =>{
    const donationReqData = await DonationReqService.getDonationReq(props.donationReqId);
    getStatus(donationReqData.data()["accepted_status"])
    setIsDonationStarted(donationReqData.data()["hasStarted"])
    setDonationData([donationReqData.data()])
  }

  const getChangedData = async() =>{
    const donationReqData = await DonationReqService.getDonationReq(props.donationReqId);
    return donationReqData.data();
  }



  useEffect(() => {
    getData();
  }, [getChangedData()])

  const hasStarted = isDonationStarted ? <PriceDonation  donationData={donationData} /> :  status == "waiting" ? <Waiting /> : <StartedDonation donationReqId ={props.donationReqId} setIsDonationStarted={setIsDonationStarted} isDonationStarted={isDonationStarted} donationData={donationData}/>
  
  return (
    <MDBContainer className='mt-2' >
                <MDBRow className='justify-content-center' style={{paddingLeft:"210px",paddingRight:"210px"}}>
                    <MDBCol><h3>Title of Donation: {donationData.length > 0 ? donationData[0]["title"] : ''}</h3></MDBCol>
                    { donationData.length > 0 ? donationData[0]["isClosed"] ? <Closed /> : hasStarted : ''}
                </MDBRow>
                {/* Donation bar  width=> increase the blue */}
                {isDonationStarted ? <MDBRow className='mt-2 mb-2' style={{paddingLeft:"210px",paddingRight:"210px"}}>
                        <div className="progress" style={{paddingLeft:"0",paddingRight:"0",height:"12px"}}>
                          <div className="progress-bar progress-bar-striped active" role="progressbar"
                          aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:`${(parseInt(donationData[0]["donated_amount"]) / parseInt(donationData[0]["amount"])) * 100 }%`}}>
                            Donation Progress Bar {`${(parseInt(donationData[0]["donated_amount"]) / parseInt(donationData[0]["amount"])) * 100 }%`}
                          </div>
                        </div>
                      </MDBRow> : ''}
                <MDBRow className='justify-content-center' style={{paddingLeft:"200px",paddingRight:"200px"}}>
                      <MDBCol style={{fontSize:"15px"}}>
                        {/* Donation description  */}
                        <img src='https://mdbootstrap.com/img/new/slides/041.webp' style={{height:"72vh"}} className='img-fluid shadow-2-strong' alt='...' />
                      </MDBCol>
                      <MDBCol >
                      {/* Donors, Verifiers, About(Long description) */}
                        <NavCards donationData={donationData} />
                      </MDBCol>
                </MDBRow>
            </MDBContainer>
  )
}


function PriceDonation (props) {
  return (
    <><MDBCol className='text-primary fs-5'>Requested: {props.donationData[0]["amount"]} AlGO</MDBCol><MDBCol className='text-secondary fs-5'>Donated: {props.donationData[0]["donated_amount"]} AlGO</MDBCol></>
  )
}
function StartedDonation (props) {

  const appContext = useContext(AppContext);
  
  const handleStartedDonation = async() =>{
    await DonationReqService.updateDonationReq(props.donationReqId,{hasStarted:true});
    props.setIsDonationStarted(!props.isDonationStarted)
  }

  return (
    <><MDBCol ><MDBBtn onClick={handleStartedDonation}>Start Donation</MDBBtn></MDBCol></>
  )
}
function Waiting (props) {
  return (
    <><MDBCol ><MDBBtn color='warning'>Waiting</MDBBtn></MDBCol></>
  )
}
function Closed (props) {
  return (
    <><MDBCol ><MDBBtn color='danger'>Closed</MDBBtn></MDBCol></>
  )
}