import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accNeedy = await stdlib.newTestAccount(stdlib.parseCurrency(5));
const accDonor = await stdlib.newTestAccount(startingBalance);
const accVerifier = await stdlib.newTestAccount(startingBalance);

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
});

const ctcDonor = accDonor.contract(backend, ctcVerifier.getInfo());

const RequestApproval = (Who) => ({

});*/

await Promise.all([
    ctcNeedy.p.Needy ({
        DonationNeeded: stdlib.parseCurrency(10),
        DonationCause: 'For doctors operation',
    }),
    ctcVerifier.p.Verifier({
        ApproveDonation: async() => {
            const IsApproved = await ask.ask(`Would you like to approve?`, ask.yesno);
            return IsApproved;
        }
    }),
]);

ask.done();
