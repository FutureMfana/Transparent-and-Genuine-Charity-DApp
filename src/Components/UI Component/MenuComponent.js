import React, { useContext, useState,useEffect } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { AppContext } from '../../State_Management/app_state';
import { loadStdlib } from '@reach-sh/stdlib'

const reach = loadStdlib("ALGO")

export default function MenuComponent() {
  const appContext = useContext(AppContext);
  const [balance,setBal] = useState('');
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);
  

  const getBalance = async (acc) => {
    try{
        let rawBalance = await reach.balanceOf(acc)
        let balance = reach.formatCurrency(rawBalance, 4)
        setBal(balance)
        return balance;
    }catch(err){
        return {"err":err.toString()}
    }

}



useEffect(() => {
  getBalance(appContext.state.account);
}, [])

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='#'>Charity</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-center '>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>History</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Notification</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className='d-flex flex-row w-auto mb-3'>
              <div style={{color:"white"}}>{appContext.state.userData.length > 0 ? appContext.state.userData[2] : ''} - {balance === '' ? '' : balance}</div>
              <MDBBtn color='danger' outline onClick={() => appContext.setAppState({...appContext.state,isLoggedin:false,account:'',userData:[],userType:''})}>LOGOUT</MDBBtn>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}