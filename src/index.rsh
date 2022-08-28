'reach 0.1';

export const main = Reach.App(() => {
    const Needy = Participant('Needy', {
        DonationNeeded: UInt,
        DonationCause: Bytes(128),
        StartDonations: Fun([],Null),
    });

    const Verifier = Participant('Verifier', {
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
        const IsApproved = declassify(interact.ApproveDonation());
    });
    Verifier.publish(IsApproved);
    Needy.interact.StartDonations();

    const [ totalDonated ] =
    parallelReduce([ 0 ])
        .invariant( balance() == totalDonated )
        .while(totalDonated < DonationNeeded)
        .api_(Donors.Donates, (donates) => {
            check(true);
            return [ donates, (resolve) => {         //donates has to be multiplied by 6? why?
                resolve(null);
                return [totalDonated + donates];
            }]
        });  
    transfer(totalDonated).to(Needy);
    commit();
    exit();
});
