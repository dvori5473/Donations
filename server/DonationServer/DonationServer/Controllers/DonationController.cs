using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace DonationServer.Controllers
{
    [Route("api/[controller]")]
    public class DonationController : Controller
    {
        private IDonationService _donationService;

        public DonationController(IDonationService donationService)
        {
            _donationService = donationService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Donation>>> GetDonations()

        {
            try
            {
                List<Donation> donations = await _donationService.GetDonations();
                return Ok(donations);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        [HttpPost]
        [Route("AddDonation")]
        public async Task<ActionResult<Donation>> AddDonation([FromBody] Donation donation)
        {
            try
            {
                Donation donation1 = await _donationService.AddDonation(donation);
                if (donation1 == null)
                    return BadRequest();
                return Ok(donation1);

            }
            catch (Exception ex) 
                {
                    throw ex;
                }
         }

            [HttpPut("{id}")]
            public async Task<ActionResult<Donation>> UpdateDonation(int id, [FromBody] Donation donation)
            {
                try
                {
                    Donation donation1 = await _donationService.UpdateDonation(id, donation);
                    if (donation1 == null)
                        return BadRequest();
                    return Ok(donation1);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }

        }
    } 
