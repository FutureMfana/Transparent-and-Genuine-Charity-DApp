import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accNeedy = await stdlib.newTestAccount(stdlib.parseCurrency(5));
const accDonor = await stdlib.newTestAccount(startingBalance);
const accVerifier = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
const donorBal = await getBalance(accDonor); //before donations
const needyBal = await getBalance(accNeedy);  //before donations


console.log('Starting application...');

const ctcNeedy = accNeedy.contract(backend);

/*
await ctcNeedy.participants.Needy({
    DonationNeeded: stdlib.parseCurrency(15),
    DonationCause: 'Needed for Doctor\'s operation',
});*/

const ctcVerifier = accVerifier.contract(backend, ctcNeedy.getInfo());

/*await ctcVerifier.participants.Verifier({
    ApproveDonation: () => {
        console.log('Do you wish to approve this donation request?');
        return true;
    }
});*/

const makeDonor = async (acc) =>{
    const ctc = acc.contract(backend, ctcNeedy.getInfo());
    await ctc.api.Donors.Donates(stdlib.parseCurrency(5));
}

await Promise.all([
    ctcNeedy.p.Needy ({
        DonationNeeded: stdlib.parseCurrency(20),
        DonationCause: 'For doctors operation',
    }),
    ctcVerifier.p.Verifier({
        ApproveDonation: async() => {
            const IsApproved = await ask.ask(`Would you like to approve?`, ask.yesno);
            return true;
        }
    }),
    makeDonor(accDonor),
]);

ask.done();

const afterDonor = await getBalance(accDonor);
const afterNeedy = await getBalance(accNeedy);

console.log(`Donor went from ${donorBal} to ${afterDonor}.`);
console.log(`Needy went from ${needyBal} to ${afterNeedy}.`);
