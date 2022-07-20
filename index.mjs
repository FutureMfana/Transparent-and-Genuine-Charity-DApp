import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);
const accNeedy = await stdlib.newTestAccount(stdlib.parseCurrency(0));
const accDonor = await stdlib.newTestAccount(startingBalance);
const accVerifier = await stdlib.newTestAccount(startingBalance);

const ctcNeedy = accNeedy.contract(backend);
const ctcVerifier = accVerifier.contract(backend, ctcNeedy.getInfo());
const ctcDonor = accDonor.contract(backend, ctcVerifier.getInfo());

const RequestApproval = (Who) => ({
    
});

await Promise.all([
    ctcNeedy.p.Needy ({
        DonationNeeded: stdlib.parseCurrency(10), 
        DonationCause: 'For doctors operation',
        WalletID: accNeedy.networkAccount,
    }),
    ctcVerifier.p.Verifier({
        VerifierID: accVerifier.networkAccount,
        ApproveDonation: () => {
            const IsApproved = await ask.ask(`Would you like to approve?`, ask.yesno);
            return IsApproved;
        }
    }),
]);
