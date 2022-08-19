import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accNeedy = await stdlib.newTestAccount(stdlib.parseCurrency(5));
const accVerifier = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const needyBal = await getBalance(accNeedy);  //before donations*/
let donorBal = 0;


console.log('Starting application...');

const ctcNeedy = accNeedy.contract(backend);

const ctcVerifier = accVerifier.contract(backend, ctcNeedy.getInfo());
let done = false;

const startingDonations = async (amt) => {
    const makeDonor = async (who) => {
        const accDonor = await stdlib.newTestAccount(startingBalance);
        const amount = stdlib.parseCurrency(Math.random() * amt);
        donorBal = await getBalance(accDonor); //before donations
        const ctc = accDonor.contract(backend, ctcNeedy.getInfo());
        try {
            await ctc.apis.Donors.Donates(amount);
            console.log(`${who} has donated ${amount}`);
        } catch (error) {
            console.log(error);
        }
    };
    await makeDonor('Alice');
    await makeDonor('Bob');
    await makeDonor('Daine');
    
    while ( ! done ) {
        await stdlib.wait(1);
    }
};

await Promise.all([
    ctcNeedy.p.Needy ({
        DonationNeeded: stdlib.parseCurrency(20),
        DonationCause: 'For doctors operation',
        StartDonations: () => {
            startingDonations(20);
        },
    }),
    ctcVerifier.p.Verifier({
        ApproveDonation: async() => {
            const IsApproved = await ask.ask(`Would you like to approve?`, ask.yesno);
            return IsApproved;
        }
    }),
]);

done = true;
