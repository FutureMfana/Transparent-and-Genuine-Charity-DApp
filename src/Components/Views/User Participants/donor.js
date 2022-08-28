import React,{useState,useEffect} from 'react'
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import MenuComponent from '../../UI Component/MenuComponent'
import CardsDonorComponent from '../../UI Component/CardDonorComp'
import ListDonorComponent from '../../UI Component/ListDonorComp'
import DonationReqService from '../../../Service/donationReq'
export default function Donor() {
    const [donationData,setDonationData] = useState([]);
    const [hasDonated,setHasDonate] = useState(false);
    const [viewTx,setViewTx] = useState(false);
    const [donationReq, setDonationReq] = useState('')
    const getData = async() =>{
        let userDataTemp = [];
        //Get Donation Request that are accepted and hasStarted
        const donationReqData = await DonationReqService.getDonationReqByAcceptedStarted();
        donationReqData.docs.map((rec) => userDataTemp.push({...rec.data(),id:rec.id}))
        setDonationData([...userDataTemp])
    }

    
    useEffect(() => {
       getData();
    }, [hasDonated])
  return (
    <MDBRow>
            <MenuComponent />
            <MDBContainer>
                <MDBRow >
                    <MDBCol size='8' style={{backgroundColor:"whitesmoke",height:'90vh',overflow:'scroll',backgroundImage: "url('images/w2.jpg')", }}>
                        <center><h4 style={{color:"white"}}>Needy Request</h4></center>
                        <MDBRow>
                            {
                                //<CardsDonorComponent />
                                donationData.map((donData) => <CardsDonorComponent hasDonated={hasDonated} setHasDonate={setHasDonate} donationData={donData} setViewTx={setViewTx} setDonationReq={setDonationReq}/>)
                            }
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className='ml-1' size='4' style={{backgroundColor:"#613385",height:'90vh', color:"white",overflow:'scroll',borderRadius:"2px" }}>
                        <center><h4>Donated to List</h4></center>
                        <MDBRow className='p-3'>
                            <ListDonorComponent viewTx={viewTx}  donationReq={donationReq} donationData={donationData}/>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBRow>
  )
}
