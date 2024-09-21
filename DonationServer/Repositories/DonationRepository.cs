using Entities;

namespace Repositories
{
    public class DonationRepository : IDonationRepository
    {
        public static List<Donation> Donations = new List<Donation>();


        public async Task<Donation> GetById(int id)
        {
            Donation d = Donations.Find(d => d.Id == id);
            return d;
        }

        public async Task<Donation> AddDonation(Donation donation)
        {
            if (donation == null) 
                return null;

            Donations.Add(donation);
            return donation;
        }

        public async Task<Donation> UpdateDonation(int id, Donation donation)
        {
            if (donation == null || id != donation.Id) 
                return null;
            Donation d = Donations.Find(d => d.Id == id);
            Donations.Remove(d);
            Donations.Add(donation);
            return donation;
        }

        public async Task<List<Donation>> GetDonations()
        {
            return Donations;
        }
    }
}
