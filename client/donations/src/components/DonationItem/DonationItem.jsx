import React from 'react';
import { ListItemText, Typography } from '@mui/material';

const DonationItem = ({ donation }) => {


    return (
<ListItemText
    primary={
        <Typography sx={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>
            <span style={{ fontWeight: 'bold',marginLeft:'2%' }}>{donation.name}</span>
            <span style={{ marginLeft: '8px' }}>{` ${donation.sum} ${donation.typeOfCurrency}`}</span>
        </Typography>
    }
    style={{ width: '60%' }}
/>
    );
};

export default DonationItem;