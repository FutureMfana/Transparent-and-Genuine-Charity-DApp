import React, {useContext} from 'react'
import {
  MDBContainer,
} from 'mdb-react-ui-kit';
import { AppContext } from '../State_Management/app_state'
import Indigent from './Views/User Participants/indigent ';
import AuthView from './Views/AuthView';
import Verifier from './Views/User Participants/verifier';
import Donor from './Views/User Participants/donor';

export default function Home() {
  const appContext = useContext(AppContext);
  const authView = <AuthView />;
  const userView =  appContext.state.userType === '' ? <h1>User Type is null</h1> : appContext.state.userType === 'needy' ? <Indigent /> :  appContext.state.userType === 'verifier' ? <Verifier /> : appContext.state.userType === 'donor' ? <Donor /> : <h1> This User Type does not exist</h1>;
  return (
    <MDBContainer fluid >
        {
          //Session 
          appContext.state.isLoggedin ? userView : authView 
        }
    </MDBContainer>
  )
}


//{appContext.state.isRegisteredView ? registerView: loginView}
