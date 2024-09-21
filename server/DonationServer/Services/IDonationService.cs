using Entities;

namespace Services
{
    public interface IDonationService
    {
        Task<Donation> AddDonation(Donation donation);
        Task<Donation> GetById(int id);
        Task<List<Donation>> GetDonations();
        Task<Donation> UpdateDonation(int id, Donation donation);
    }
}