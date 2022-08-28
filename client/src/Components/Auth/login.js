import React,{useContext,useState} from 'react'
import {AppContext} from '../../State_Management/app_state'
import { MDBContainer, MDBRow,MDBBtn, MDBInput  } from 'mdb-react-ui-kit'
import UsersDataService from '../../Service/users';
import MyAlgoWalletLogin from './myalgowalletLogin';
export default function Login(props) {
  const appContext = useContext(AppContext);
  const [tempUsername, settempUsername] = useState('');

  const handleLogin = async () =>{
    let userDataRecord = [];
    //Get username then check if usertype is the same before updating usertype and username global
    const userNameData = await UsersDataService.getUsersByUsername(tempUsername);
    if(userNameData.docs.length > 0){
      console.log("Username does exist => accepted")
      userNameData.docs.forEach((rec) =>{
        userDataRecord.push({...rec.data(),id:rec.id})
      })
      const acc = await MyAlgoWalletLogin.connectWallet();
      console.log(userDataRecord)
      if(!acc.hasOwnProperty('err')){
        console.log(acc); 
        if(acc.account.networkAccount.addr === userDataRecord[0]["wallet_address"]){
          console.log("User wallet address does exist => accepted")
                                                              //[userId,username,firstName]
          appContext.setAppState({...appContext.state,userData:[userDataRecord[0]["id"],userDataRecord[0]["username"],userDataRecord[0]["first_name"]],userType:userDataRecord[0]["user_type"],isLoggedin:true,account:acc.account});
        }else{
          console.log("User wallet address does not exist => not accepted")
        }
      }else{
        console.log(acc.err);
      }
    }else{
      console.log("User does not exist => not accepted")
    }
  }

  const onChange = (e) => {
    settempUsername(e.target.value);
  };

  return (
    <>
      <MDBContainer style={{paddingTop:"10%", paddingLeft:"100px",paddingRight:"100px",marginTop:"100px"}}>
        <MDBRow>
          <div className='d-flex align-items-center justify-content-center'><h4 className='text-uppercase fw-bold' style={{color:"purple"}}>Login Form:</h4></div>
        </MDBRow>
        <MDBRow className='mt-3'>
          <MDBInput 
            name='requestedDecr'  
            label='Username' 
            id='textAreaExample'
            value={tempUsername}
            onChange={onChange}
          />
        </MDBRow>
        <MDBRow className='mt-3'>
            <div className='d-flex flex-row-reverse' onClick={handleLogin}>
              <MDBBtn rounded style={{color:"white", background:"purple"}}>Login</MDBBtn>
            </div>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
