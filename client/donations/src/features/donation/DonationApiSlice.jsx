import apiSlice from "../../utils/ApiSlice";


const donationApiSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getAllDonations: build.query({
            query: () => ({
                url: '/api/Donation'
            }),
            providesTags: ["donations"]
        }),
        updateDonation: build.mutation({
      
            query: (donation) => ({
                url: `/api/Donation/${donation.id}`,
                method: "PUT",
                body: donation
            })
        }),
        addDonation: build.mutation({
            query: (donation) => ({
                url: '/api/Donation/AddDonation',
                method: "POST",
                body: donation
            }),
            
        }),
    }),
})
export const { useAddDonationMutation, useGetAllDonationsQuery, useUpdateDonationMutation } = donationApiSlice

