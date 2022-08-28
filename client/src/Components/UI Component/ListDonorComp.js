import React,{useState,useEffect,useContext} from 'react'
import { AppContext } from '../../State_Management/app_state';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import UsersDataService from '../../Service/users';

export default function ListDonorComponent(props) {
  const appContext = useContext(AppContext);
  const [listAccTrans,setAccTrans] = useState();
  const [curUserWallet,setCurUserWallet] = useState('');
  const getTransactionByAccount = (selAccount) => {
    const url = "http://localhost:5000/transactions/" + selAccount;
    fetch(url)
    .then(response => response.json())
    .then((results) => setAccTrans(results)); //TODO Don't forget to setAccTrans 
  
}
  const getUserByWalletAddr = async() =>{
    //Get the user wallet
    const getNeedyName = await UsersDataService.getAllUsers();
    const filterNeedyName = getNeedyName.docs.filter((doc) => doc.id === appContext.state.userData[0])
    setCurUserWallet(filterNeedyName[0].data()["wallet_address"]);
    getTransactionByAccount(filterNeedyName[0].data()["wallet_address"])
}


  useEffect(() => {
      getUserByWalletAddr();
      
  },[]);

  return (
    <ListGroup variant="flush">
      {
        props.viewTx ? listAccTrans !== undefined ? listAccTrans.map((accTx) => {
          return <Items  key={accTx.txId} tx={accTx} donationReq={props.donationReq} donationData={props.donationData} curUserWallet={curUserWallet}/>
        }) : '' : <h4>Click on View Transaction</h4>
      }
    </ListGroup>
  )
}
const Items = (props) => {
  const [senderName,setSenderName] = useState('');
  const [receiverName,setReceiverName] = useState('');
  const [isSender,setIsSender] = useState(false);
  const [title,getTitle] = useState('');
  const getUserByWalletAddr = async() =>{
    //Sender and receiver Wallet Address
    const senderWalletAddr = props.tx.senderAccount;
    const receiverWalletAddr = props.tx.receiverInnerTrans[0]["payment-transaction"]["receiver"];

    //Get the user wallet
    const userDataDB = await UsersDataService.getAllUsers();
    const getSenderName = userDataDB.docs.filter((doc) => doc.data()["wallet_address"] === senderWalletAddr);
    setSenderName(getSenderName.length > 0 ? getSenderName[0].data()["first_name"] : 'UNKNOWN');

    const getReceiverName = userDataDB.docs.filter((doc) => doc.data()["wallet_address"] === receiverWalletAddr);
    setReceiverName(getReceiverName.length > 0 ? getReceiverName[0].data()["first_name"] : 'UNKNOWN')

    //current user as sender
    setIsSender(getSenderName.length > 0 ? senderWalletAddr === props.curUserWallet : false);

    //Get selected donation request
    const getDonationReq = props.donationData.filter((document) => document["id"] === props.donationReq);
    getTitle(getDonationReq[0]["title"])
  }


  useEffect(() => {
      getUserByWalletAddr();
      
  },[]);

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div className="">
        <div className="fw-bold">{title}</div>
        {/* Sender and Receiver  */}
        {isSender ? `${senderName} to ${receiverName}`: `${receiverName} to Me`}
      </div>
      <Badge bg="success">{props.tx.receiverInnerTrans[0]["payment-transaction"]["amount"] / 1000000}</Badge>
    </ListGroup.Item>
  )
}