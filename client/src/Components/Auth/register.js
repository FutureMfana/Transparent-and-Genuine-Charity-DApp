import React,{useContext,useState} from 'react'
import MyAlgoWalletLogin from './myalgowalletLogin';
import {AppContext} from '../../State_Management/app_state'
import {
  MDBBtn,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextInput from '../UI Component/TextInput';
import UsersDataService from '../../Service/users';



export default function Register(props) {
  const appContext = useContext(AppContext);
  const [tempUsername, settempUsername] = useState('');
  
  const handleRegister = async () =>{
    //Get username then check if usertype is the same before updating usertype and username global
    const data = await UsersDataService.getUsersByUsername(tempUsername);
    if(data.docs.length > 0){
      console.log("User does exist => not accepted")
    }else{
      console.log("User does not exist => accepted")
      const acc = await MyAlgoWalletLogin.connectWallet();
      if(!acc.hasOwnProperty('err')){
        console.log(acc); 
        const data1 = await UsersDataService.getUserByWalletAddr(acc.account);
        if(data1.docs.length > 0){
          console.log("User Wallet does exist => not accepted")
        }else{
          //Get New Wallet Address and Mnemonic and Add User then store the state of the user 
          appContext.setAppState({...appContext.state,isLoggedin:true});
          //Store the userView/userType in cookies or session
          console.log("User Wallet does not exist => accepted " + appContext.state.userType)
        }
        
      }else{
        console.log(acc.err);
      }
    
    }
    
  }

  const onChange = (e) => {
    settempUsername(e.target.value)
  };

  return (
    <MDBContainer style={{paddingTop:"10%", paddingLeft:"100px",paddingRight:"100px",marginTop:"100px"}}>
    <MDBRow>
      <div className='d-flex align-items-center justify-content-center'><h4 className='text-uppercase fw-bold' style={{color:"purple"}}>REGISTER FORM:</h4></div>
    </MDBRow>
    <MDBRow middle={true}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Select Participants Type"
            value={appContext.state.userType}
            onChange={(e) => appContext.setAppState({...appContext.state,userType:e.target.value}) }
            >
            {/* {This should be a mapp array} */}
            <MenuItem value="needy">Needy</MenuItem>
            <MenuItem value="donor">Donor</MenuItem>
            <MenuItem value="verifier">Verifier</MenuItem>
          </Select>
    </MDBRow>
    <MDBRow className='mt-3'>
      <TextInput 
        name="userName"
        label="Username"
        value={tempUsername}
        helperText="Username should be unique"
        handleChange={onChange}
        />
      
    </MDBRow>
    <MDBRow className='mt-3'>
        <div className='d-flex flex-row-reverse' onClick={handleRegister}>
          <MDBBtn rounded style={{color:"white", background:"purple"}}>REGISTER</MDBBtn>
        </div>
    </MDBRow>
  </MDBContainer>
  )
}



