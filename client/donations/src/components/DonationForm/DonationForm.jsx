import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputAdornment, TextField, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAddDonationMutation } from '../../features/donation/DonationApiSlice';
import { createTheme } from '@mui/material/styles';
import './DonationForm.css';

export default function DonationForm({ setIsAdding, setShowDonationsList ,setShowButton}) {
    const [nextId, setNextId] = useState(1);
    const [addDonation, {isSuccess, data }] = useAddDonationMutation()

    useEffect(() => {  
        if (isSuccess) {     
            setIsAdding(false);
            setShowDonationsList(true);
            setShowButton(true)
        }
    }, [isSuccess,data])
    
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            sum: '',
            type: '',
            vocation: '',
            condition: '',
            typeOfCurrency: '',
            conversionRate: ''
        },
        validate: (data) => {
            let errors = {};
            if (!data.name) errors.name = 'Name is required.';
            if (!data.sum) errors.sum = 'Sum is required.';
            if (!data.type) errors.type = 'Type is required.';
            if (!data.vocation) errors.vocation = 'Vocation is required.';
            if (!data.typeOfCurrency) errors.typeOfCurrency = 'Type of currency is required.';
            if (!data.conversionRate) errors.conversionRate = 'Conversion rate is required.';
            return errors;
        },
        
        onSubmit: (data) => {
            const donationWithId = { ...data, id: nextId };
          
            addDonation(donationWithId).unwrap()
                .then(() => {
                    setNextId(nextId + 1);
                    setIsAdding(false);
                    setShowDonationsList(true);
                })
                .catch(error => {
                    console.error('Failed to add donation:', error);
                });
        }
    });
    // const theme = createTheme({
    //     direction: 'rtl',
    //   });
    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const handleClear = () => {
        formik.resetForm();
    };
    const hebrewEnglishRegex = /^[a-zA-Zא-ת\s]+$/;

    return (
        <div className="card" dir='rtl'>
            <form onSubmit={formik.handleSubmit} className="form" dir='rtl'>
                <h1 className="form-header">הוספת דיווח על עמותה</h1>

                <div className="row" dir='rtl'>
                    
                    <TextField
                        id="name"
                        label="שם הישות המדינית הזרה"
                        variant="outlined"
                        type="text"
                        sx={{ width: '20%', marginLeft: '25px',borderRadius:"50px" }}
                        required
                        dir='rtl'
                        error={isFormFieldInvalid("name")}
                        helperText={getFormErrorMessage("name")}
                        value={formik.values.name}
                        onChange={(e) => {
                            if (hebrewEnglishRegex.test(e.target.value) || e.target.value === '') {
                                formik.handleChange(e);
                            }
                        }} />

                    <TextField
                        id="sum"
                        label="סכום התרומה בשח"
                        variant="outlined"
                        type="number"
                        sx={{ width: '20%', marginLeft: '25px',borderRadius:"50px" }}
                        required
                        error={isFormFieldInvalid("sum")}
                        helperText={getFormErrorMessage("sum")}
                        value={formik.values.sum}
                        onChange={formik.handleChange} />
                    
                    <TextField
                        id="type"
                        label="סוג הישות המדינית הזרה"
                        variant="outlined"
                        type="text"
                        sx={{ width: '54.8%',borderRadius:"50px" }}
                        required
                        error={isFormFieldInvalid("type")}
                        helperText={getFormErrorMessage("type")}
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <KeyboardArrowDownIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <div className="row">
                    <TextField
                        id="vocation"
                        label="ייעוד התרומה"
                        variant="outlined"
                        type="text"
                        sx={{ width: '100%' }}
                        required
                        error={isFormFieldInvalid("vocation")}
                        helperText={getFormErrorMessage("vocation")}
                        value={formik.values.vocation}
                        onChange={formik.handleChange} />
                </div>

                <div className="row">
                    <TextField
                        id="condition"
                        label="התנאים לתרומה"
                        variant="outlined"
                        type="text"
                        sx={{ width: '100%', marginBottom: "20px" }}
                        value={formik.values.condition}
                        onChange={formik.handleChange} />
                </div>

                <div className="row">
                    <TextField
                        id="typeOfCurrency"
                        label="סוג המטבע"
                        variant="outlined"
                        type="text"
                        sx={{ width: '20%', marginLeft: '25px' ,borderRadius:"50px"}}
                        required
                        error={isFormFieldInvalid("typeOfCurrency")}
                        helperText={getFormErrorMessage("typeOfCurrency")}
                        value={formik.values.typeOfCurrency}
                        onChange={formik.handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <KeyboardArrowDownIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        id="conversionRate"
                        label="שער ההמרה"
                        variant="outlined"
                        type="number"
                        sx={{ width: '20%' }}
                        required
                        error={isFormFieldInvalid("conversionRate")}
                        helperText={getFormErrorMessage("conversionRate")}
                        value={formik.values.conversionRate}
                        onChange={formik.handleChange} />
                </div>

                <div className="button-container">
                    <Button className="button" type="submit" variant="contained" style={{borderRadius:'50px',height:'50px',width:'25%'}}>שמירה</Button>
                    <Button className={`button button-clear`}type="button"  variant="outlined" onClick={handleClear}style={{width:'25%',height:'50px',borderRadius:'50px',marginLeft:'10px'}}>ניקוי</Button>
                </div>
            </form>
        </div>
    );
}
