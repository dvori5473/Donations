# CLIENT Application README

## Overview
This document specifies the requirements for the CLIENT application, designed to manage donation records for the software developer 

## Features
- **Add Donation:** Form to input donation details.
- **Donation List:** Display of entity names and amounts.
- **Edit Donation:** Ability to edit existing donations.
- **Validation:** Ensures data integrity.

## Components
1. **Add Donation Component**  
   **File:** `DonationForm.jsx`  
   - Fields: Entity Name (mandatory), Donation Amount (mandatory).

2. **Donation List Component**  
   **File:** `DonationList.jsx`  
   - Displays a list of donations.

3. **Edit Donation Component**  
   **File:** `UpdateDonation.jsx`  
   - Allows switching between view and edit modes.


## Server Connection
**Endpoint:**  
`POST /api/donations`  
## Validation

### Client-Side Validation
- Accepts Hebrew and English characters only.
- Numeric input only.

### Server-Side Validation
- Ensure required fields are filled.
- Donation amount does not exceed 10,000 ILS.
