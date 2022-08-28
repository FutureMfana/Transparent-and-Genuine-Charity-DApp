import React,{useState,useEffect,useContext} from 'react'
import { MDBRow,MDBBtn, MDBCol,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,MDBIcon, MDBContainer  } from 'mdb-react-ui-kit'
import DonationReqService from '../../../../Service/donationReq';
import MultiTextInput from '../../../UI Component/MultiTextInput';
import NumericInput from '../../../UI Component/NumericInput';
import TextInput from '../../../UI Component/TextInput';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import UsersDataService from '../../../../Service/users';
import { AppContext } from '../../../../State_Management/app_state';


export default function AddDonationModalBox(props) {
    const appContext = useContext(AppContext);
    const [isVerifiedList, setisVerifiedList] = useState(false);
    const [verifiersList,setVerifierList] = useState([{
        label:"",
        id:""
    }]);
    const [value, setValue] = useState(verifiersList[0]);
    const [basicModal, setBasicModal] = useState(false);
    const [formVal, setFormVal] = useState({
        title: '',
        amount:0, // Login or Register Tab Button
        longDescr:'',
        shortDescr:'',
    });
  
    const toggleShow = () => setBasicModal(!basicModal);
    
    const onSave = async () => {
      const addDonationReq = await DonationReqService.addDonationReq({
        title:formVal.title,
        amount: formVal.amount,
        description:[formVal.shortDescr,formVal.longDescr],
        userId: appContext.state.userData[0],
        verifierId: value.id,
        hasStarted:false,
        accepted_status:"waiting",
        isClosed:false,
        donated_amount:0,
        info:''
      });
      console.log(addDonationReq.id);
      props.setDonationReqId(addDonationReq.id); //TODO Test this
      props.setAddDonation(false);
      setBasicModal(false);
    }
  
    return (
      <>
        <div>
        <MDBBtn style={{padding:"120px",marginLeft:"20px",marginRight:"0px",marginTop:"100px"}} onClick={toggleShow}><MDBIcon fas icon="plus" size='7x' /><div>Create Donation Request</div></MDBBtn>
        </div>
        <MDBModal staticBackdrop  show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Create Your Donation Request</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                  { isVerifiedList ? <VerifiersListRequestBox 
                    verifiersList={verifiersList}
                    setVerifierList={setVerifierList}
                    value={value}
                    setValue={setValue}

                  /> : <DonationRequestBox formVal={formVal} setFormVal={setFormVal}/>}
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                { isVerifiedList ? <MDBBtn onClick={onSave}>Save changes</MDBBtn> : <MDBBtn onClick={() => setisVerifiedList(true)}>Add Verifiers</MDBBtn>}
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    )
}

const DonationRequestBox = (props) =>{
    return(
        <MDBContainer>
            <MDBRow className='justify-content-center'>
                <TextInput 
                id="outlined-basic"
                name='title'
                label='Title of Dation Request'
                variant="filled"
                value={props.formVal.title}
                helperText='Enter short title for verifier or donor to view'
                handleChange={(e) => { props.setFormVal({...props.formVal,title:e.target.value})}}
                />
            </MDBRow>
            <MDBRow>
                <MDBCol size='5'>
                    <MultiTextInput 
                        id="outlined-basic"
                        name='shortDescr'
                        label='Short Description'
                        variant="filled"
                        maxRows={2}
                        value={props.formVal.shortDescr}
                        helperText='Enter short description for verifier or donor to view'
                        handleChange={(e) => props.setFormVal({...props.formVal,shortDescr:e.target.value})}
                    />
                </MDBCol>
                <MDBCol size='7'>
                    <MultiTextInput 
                        id="outlined-basic"
                        name='longDescr'
                        label='Long Description'
                        variant="filled"
                        maxRows={5}
                        value={props.formVal.longDescr}
                        helperText='Enter the reseason for your request'
                        handleChange={(e) => props.setFormVal({...props.formVal,longDescr:e.target.value})}
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow className='justify-content-center'>
                <MDBCol size='5'>
                    <NumericInput 
                        id="outlined-basic"
                        name='amount'
                        label='Amount Requested'
                        variant="filled"
                        isNumber={true}
                        value={props.formVal.amount}
                        helperText='Request Amount'
                        handleChange={(e) => props.setFormVal({...props.formVal,amount:e.target.value})}
                    />
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
    )
}



const VerifiersListRequestBox = (props) =>{
    
    const [inputValue, setInputValue] = useState('');

    const getVerifierList = async() =>{
        let verifiersListTemp = [];
        const verList = await UsersDataService.getUsersByType("verifier");
        verList.docs.forEach((rec) =>{
            verifiersListTemp.push({
                label: rec.data()["first_name"].toString(),
                id: rec.id
            })
        })
        
        props.setVerifierList([...props.verifiersList,...verifiersListTemp]);
    }

    useEffect(() => {
        getVerifierList();
    }, [])
    

    return(
        <MDBContainer>
            <Autocomplete
                value={props.value}
                onChange={(event, newValue) => {
                    props.setValue(newValue)
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue)
                }}
                id="controllable-states-demo"
                options={props.verifiersList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select your Verifier" />}
            />
            
        </MDBContainer>
    )
}