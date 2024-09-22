import React, { useEffect, useState } from 'react';
import DonationItem from '../DonationItem/DonationItem';
import { List, ListItem, Box, IconButton, Divider,CircularProgress  } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModeIcon from '@mui/icons-material/Mode';
import { useGetAllDonationsQuery } from '../../features/donation/DonationApiSlice';
import UpdateDonationForm from '../UpdateDonationForm/UpdateDonationForm';
import './DonationsList.css'; 

export default function DonationsList({  setIsEditing }) {
    const { data:donations=[], isSuccess, isLoading } = useGetAllDonationsQuery();
   
    useEffect(() => {  
        if (isSuccess) {
            
        }
    }, [isSuccess,donations]);

    const [expanded, setExpanded] = useState(false);
    const [expandedId, setExpandedId] = useState(null);

    const handleAccordionClick = (id) => {
        if (expandedId === id) {
            setExpanded(false);
            setExpandedId(null);
            setIsEditing(false)
        } else {
            setExpanded(true);
            setExpandedId(id);
            setIsEditing(true)
        }
    };
    if (isLoading) {
        return <CircularProgress />; 
    }
    
    const closeAccordion = () => {
        setExpandedId(null);
    };
        
    return (
        <List className="list-container" style={{marginLeft:'17%'}} >
            {donations.map((donation,index) => (
                <ListItem key={`donation-${donation.id}-${index}`}>
                    <Accordion
                        className={`accordion ${expandedId === donation.id ? 'accordion-expanded' : 'accordion-collapsed'}`}
                        sx={{
                            width: '90%', marginRight: '5%',
                            border: expandedId === donation.id ? '2px solid #247acf' : ' 1px solid #2b2c2d',
                            borderRadius: '30%',
                            paddingRight: '5px',
                            direction: 'rtl',
                            justifyContent:'space-between'
                        }}
                    >
                        <AccordionSummary
                            onClick={() => handleAccordionClick(donation.id)}
                            aria-controls={`panel-${donation.id}-content`}
                            expandIcon={<ExpandMoreIcon />}
                            id={`panel-${donation.id}-header`}
                            sx={{
                                width: '100%',
                                backgroundColor: expandedId === donation.id ? '#e0f7fa' : 'transparent',
                                height: expandedId === donation.id ? '20px' : '60px',
                                direction: 'rtl'
                            }}
                            className={`accordion-summary ${expandedId === donation.id ? 'accordion-summary-expanded' : 'accordion-summary-collapsed'}`}
                        >
                                <DonationItem donation={donation} />
                            <Box className="icon-container">
                                <IconButton className={`icon-button mode`}>
                                    <ModeIcon />
                                </IconButton>
                                <IconButton className="icon-button">
                                    <DeleteIcon />
                                </IconButton>
                                <Divider orientation="vertical" variant="middle" flexItem className="divider" />
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails> <UpdateDonationForm donation={donation} setIsEditing={setIsEditing} setExpanded={setExpanded} setExpandedId={setExpandedId} closeAccordion={closeAccordion}/>
                       </AccordionDetails>
                    </Accordion>
                </ListItem>
            ))}
        </List>
    );
}
