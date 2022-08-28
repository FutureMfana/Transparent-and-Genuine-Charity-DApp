import { loadStdlib,ALGO_MyAlgoConnect } from '@reach-sh/stdlib'

const reach = loadStdlib("ALGO")

reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', ALGO_MyAlgoConnect })); 

class MyAlgoWalletLogin{
    connectWallet = async () =>{
        try{
            let acc = await this.getAccount();
            let bal = await this.getBalance(acc);
            return {
                "account": acc,
                "balance": bal
            };
  
        }catch(err){
            return {"err":err.toString()}
        }
    }
  
    //Check if the user has more than one transaction
    getAccount = async () => {
        try{
            let account = await reach.getDefaultAccount()
            //console.log("Account :" + account.networkAccount.addr)
            return account;
        }catch(err){
            return {"err":err.toString()}
        }
    }
  
    getBalance = async (acc) => {
        try{
            let rawBalance = await reach.balanceOf(acc)
            let balance = reach.formatCurrency(rawBalance, 4)
            //console.log("Balance :" + balance)
            return balance;
        }catch(err){
            return {"err":err.toString()}
        }
  
    }
    
}
export default new MyAlgoWalletLogin();