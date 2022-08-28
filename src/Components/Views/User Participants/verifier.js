import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React,{useEffect,useState,useContext} from 'react'
import MenuComponent from '../../UI Component/MenuComponent'
import CardsComponent from '../../UI Component/CardsComponent'
import ListComponent from '../../UI Component/ListComponent'
import DonationReqService from '../../../Service/donationReq'
import { AppContext } from '../../../State_Management/app_state';

export default function Verifier() {
  const appContext = useContext(AppContext);
  
  const [donationData,setDonationData] = useState([]);
  const [changedStatus,setChangedStatus] = useState(false);
  const getData = async() =>{
    let userDataTemp = [];
    //Get Donation Request that are sent to Verifier by their user documentId
    const donationReqData = await DonationReqService.getDonationReqByVerifierId(appContext.state.userData[0]);
    donationReqData.docs.map((rec) => userDataTemp.push({...rec.data(),id:rec.id}))
    //console.log([...donationData,...userDataTemp])
    setDonationData([...userDataTemp])
  }

  
  useEffect(() => {
    getData();
  }, [changedStatus])


  return (
    <>
        <MDBRow>
            <MenuComponent />
            <MDBContainer>
                <MDBRow >
                    <MDBCol size='8' style={{backgroundColor:"whitesmoke",height:'90vh',overflow:'scroll'}}>
                        <center><h4>Needy Request</h4></center>
                        <MDBRow>
                        {

                          donationData.map((donData) => donData["accepted_status"] == "accepted" || donData["accepted_status"] == "rejected" ? '' : <CardsComponent changedStatus={changedStatus} setChangedStatus={setChangedStatus} donationData={donData}/>)
                        }
                        </MDBRow>
                    </MDBCol>
                    <MDBCol size='4' style={{backgroundColor:"#613385",height:'90vh', color:"white",overflow:'scroll' }}>
                        <center><h4>Needy Response</h4></center>
                        <MDBRow className='p-3'>
                            <ListComponent donationData={donationData}/>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBRow>
    </>
  )
}
