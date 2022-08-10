'reach 0.1';

export const main = Reach.App(() => {
    const Needy = Participant('Needy', {
        DonationNeeded: UInt,
        DonationCause: Bytes(128),
    });

    
    const Verifier = Participant('Verifier', {
        VerifierID: Address,
        ApproveDonation: Fun([], Bool),
    });

    const Donors = API('Donors', {
        Donates: Fun([UInt], Null),
    });
    init();

    Needy.only(() => {
        const DonationNeeded = declassify(interact.DonationNeeded);
        const DonationCause = declassify(interact.DonationCause);
   });
    Needy.publish(DonationNeeded, DonationCause);
    commit();

    Verifier.only(() => {
        const VerifierID = declassify(interact.VerifierID);
        const IsApproved = declassify(interact.ApproveDonation());
    });
    Verifier.publish(VerifierID, IsApproved);
    commit();

    const [ totalDonated ] =
    parallelReduce([ 0 ])
        .invariant( balance() == totalDonated )
        .while(totalDonated < DonationNeeded)
        .api_(Donors.Donates, (donates) => {
            check(true);

            return [ donates, (resolve) => {
                resolve(null);
                return [totalDonated + donates];
            }]
        });
    transfer(totalDonated).to(Needy);
    commit();
});
