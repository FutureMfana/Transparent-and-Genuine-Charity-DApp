'reach 0.1';

export const main = Reach.App(() => {
    const Needy = Participant('Needy', {
        DonationNeeded: UInt,
        DonationCause: Bytes(128),
        WalletID: Address,
    });

    
    const Verifier = Participant('Verifier', {
        VerifierID: Address,
        ApproveDonation: Fun([], Bool),
    });

    /*const Donor = Participant('Donor', {
        Donation: UInt,
        NeedyWalletID: Address,
        Donates: Fun([UInt, Address], Null),
    });*/
    init();

    Needy.only(() => {
        const DonationNeeded = declassify(interact.DonationNeeded);
        const DonationCause = declassify(interact.DonationCause);
        const WalletID = declassify(interact.WalletID);
   });
    Needy.publish(DonationNeeded, DonationCause, WalletID);
    commit();

    Verifier.only(() => {
        const VerifierID = declassify(interact.VerifierID);
        const IsApproved = declassify(interact.ApproveDonation());
    });
    Verifier.publish(VerifierID, IsApproved);
    commit();

    /*Donor.only(() => {
        const Donation = declassify(interact.Donation);
        const NeedyWalletID = declassify(interact.NeedyWalletID);
    });
    Donor.publish(Donation, NeedyWalletID);
    commit();

    Donor.only(() => {
        interact.Donates(Donation, NeedyWalletID);
    });*/

});
