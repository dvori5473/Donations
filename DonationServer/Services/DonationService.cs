using Entities;
using Repositories;

namespace Services
{
    public class DonationService : IDonationService
    {
        private IDonationRepository _donationRepository;
        private  IEmailService _emailService;
        public DonationService(IDonationRepository donationRepository,IEmailService emailService)
        {
            _donationRepository= donationRepository;
            _emailService = emailService;
        }
        public async Task<Donation> GetById(int id)
        {
            return await _donationRepository.GetById(id);
        }

        public async Task<Donation> AddDonation(Donation donation)
        {
            Donation addedDonation = await _donationRepository.AddDonation(donation);
            if (addedDonation != null && addedDonation.Sum > 10000)
            {
                await _emailService.SendEmailAsync(
                    "dvori5473@gmail.com", 
                    $"Donation {addedDonation.Name}",
                    $"A donation of {addedDonation.Sum} NIS has been received."
                );
            }
            return addedDonation;

        }
        public async Task<Donation> UpdateDonation(int id, Donation donation)
        {

            return await _donationRepository.UpdateDonation(id, donation);

        }
        public async Task<List<Donation>> GetDonations()
        {

            return await _donationRepository.GetDonations();
        }
    }
}
