import React, {useContext} from 'react'
import {
    MDBRow,
    MDBCol,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import Login from '../Auth/login';
import Register from '../Auth/register';
import { AppContext } from '../../State_Management/app_state';
const imgStyle = {
    backgroundImage: "url('images/w3.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height:"100vh",
    backdropFilter: "blur(10px)"
};

const loginView = <Login />
const registerView = <Register />;

export default function AuthView() {
  const appContext = useContext(AppContext);

  const handleLoginRegisterTabClick = (tabString) =>{
    appContext.setAppState({...appContext.state,loginRegisterActive:tabString});
  }
  return (
    <MDBRow>
        <MDBCol className='bg-image p-5 text-center shadow-1-strong rounded text-white' style={imgStyle}>
          
        </MDBCol>
        <MDBCol>
          <div>
            <MDBTabs pills justify className='mb-3'>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleLoginRegisterTabClick('login')}
                  active={appContext.state.loginRegisterActive === 'login'}
                >
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleLoginRegisterTabClick('register')}
                  active={appContext.state.loginRegisterActive === 'register'}
                >
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={appContext.state.loginRegisterActive === 'login'}>
                {loginView}
              </MDBTabsPane>
              <MDBTabsPane show={appContext.state.loginRegisterActive === 'register'}>
                {registerView}
              </MDBTabsPane>
            </MDBTabsContent>
          </div>
        </MDBCol>
      </MDBRow>
  )
}
