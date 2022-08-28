import { db } from "../Service/firebase_config";
import {collection, getDoc, getDocs, addDoc, updateDoc,deleteDoc, doc, where, query} from "firebase/firestore"

const donationReqRef = collection(db,"DonationReq");
class DonationReqService{
    pathOfSpecificUser = (userId) =>{
        return doc(db,"users",userId);
    }
    addDonationReq = (donReq) => {
        return addDoc(donationReqRef,donReq);
    }
    updateDonationReq = (id,updateReq) =>{
        const usersDoc = doc(db,"DonationReq",id);
        return updateDoc(usersDoc,updateReq);
    }
    deleteDonationReq = (id) => {
        const donationReqDoc = doc(db,"DonationReq",id);
        return deleteDoc(donationReqDoc)
    }
    getAllDonationReq = () =>{
        return getDocs(donationReqRef);
    }

    getDonationReq = (id) => {
        const donationReqDoc = doc(db,"DonationReq", id);
        return getDoc(donationReqDoc);
    }

    getDonationReqByUserId = (userId) => {
        const donationReqsDoc = query(donationReqRef,where("userId", "==" , userId));
        return getDocs(donationReqsDoc);
    }
    getDonationReqByVerifierId = (verifierId) => {
        const donationReqDoc = query(donationReqRef,where("verifierId", "==" , verifierId)); //FIXME Change verifierName to verifierId
        return getDocs(donationReqDoc);
    }
    getDonationReqByAcceptedStarted = () => {
        const donationReqDoc = query(donationReqRef,where("hasStarted", "==" , true),where("accepted_status", "==" , "accepted")); 
        return getDocs(donationReqDoc);
    }
    getDonationReqByRef = (ref) => {
        return getDoc(ref);
    }
    
}

export default new DonationReqService();