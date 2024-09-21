using Entities;

namespace Repositories
{
    public interface IDonationRepository
    {
        Task<Donation> AddDonation(Donation donation);
        Task<Donation> GetById(int id);
        Task<List<Donation>> GetDonations();
        Task<Donation> UpdateDonation(int id, Donation donation);
    }
}