import { Button } from "@mui/material";
import { useState } from "react";
import DonationForm from "../components/DonationForm/DonationForm";
import DonationsList from "../components/DonationsList/DonationsList";


const Main=()=>{
    
    const [isAdding ,setIsAdding] = useState(false);
    const [showDonationsList,setShowDonationsList]=useState(true)
    const [isEditing, setIsEditing] = useState(false);
    const [showButton,setShowButton]=useState(true)
    
    const handleClick=()=>{
        setShowButton(false)
        setIsAdding(true)
        setShowDonationsList(false)
    }

    return(
        <div style={{marginTop:'30px'}}>
        {isAdding&&<DonationForm setIsAdding={setIsAdding} setShowDonationsList={setShowDonationsList} setShowButton={setShowButton}/>}
        {showDonationsList&&<DonationsList setShowDonationsList={setShowDonationsList} setIsEditing={setIsEditing} isEditing={isEditing}/>}
{showButton&&<Button variant="contained" onClick={handleClick}style={{ borderRadius: '50px', width: '10%' ,marginLeft:'72%',height:'50px'}}>הוספת תרומה</Button>
}
        </div>
    )
}
export default Main