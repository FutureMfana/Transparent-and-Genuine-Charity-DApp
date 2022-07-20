'reach 0.1';

export const main = Reach.App(() => {
    const Needy = Participant('Needy', {
        DonationNeeded: UInt,
        DonationCause: Bytes(128),
        WalletID: Address,
        ApproverID: Address,
        Name: Bytes(128),
        RequestApproval: Fun([UInt, Bytes(128), Address, Address, Bytes(128)], Bool),
    });

    
    const Verifier = Participant('Verifier', {
        VerifierID: Address,
        IsApproved: Bool,
        ApproveDonation: Fun([Bool, Address], Null),
    });

    const Donor = Participant('Donor', {
        Donation: UInt,
        NeedyWalletID: Address,
        Donates: Fun([UInt, Address], Null),
    });
    init();

    Needy.only(() => {
        const DonationNeeded = declassify(interact.DonationNeeded);
        const DonationCause = declassify(interact.DonationCause);
        const WalletID = declassify(interact.WalletID);
        const Name = declassify(interact.Name);
        const ApproverID = declassify(interact.ApproverID);
        const ApprovedResponse = declassify(interact.RequestApproval(DonationNeeded, DonationCause, WalletID, ApproverID, Name));
    });
    Needy.publish(DonationNeeded, DonationCause, WalletID, ApproverID, Name, ApprovedResponse);
    commit();

    Verifier.only(() => {
        const IsApproved = declassify(interact.IsApproved);
        const VerifierID = declassify(interact.VerifierID);
    });
    Verifier.publish(IsApproved, VerifierID);
    commit();

    Verifier.only(() => {
        interact.ApproveDonation(IsApproved, VerifierID);
    });

    Donor.only(() => {
        const Donation = declassify(interact.Donation);
        const NeedyWalletID = declassify(interact.NeedyWalletID);
    });
    Donor.publish(Donation, NeedyWalletID);
    commit();

    Donor.only(() => {
        interact.Donates(Donation, NeedyWalletID);
    });

});
