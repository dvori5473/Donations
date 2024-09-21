import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { TextField, Button, InputAdornment } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import { useUpdateDonationMutation } from '../../features/donation/DonationApiSlice';
 import './UpdateDonationForm.css'; 

const UpdateDonationForm = ({ donation, setIsEditing,setExpandedId,setExpanded,closeAccordion}) => {
    const [updateDonation, { isSuccess, data }] = useUpdateDonationMutation();

    useEffect(() => {
        if (isSuccess) {
            console.log("gggggggg");
            
            setIsEditing(false);
            setExpanded(false);
            setExpandedId(null);
        }
    }, [isSuccess,data]);

    const formik = useFormik({
        initialValues: {
            id: donation.id||'',
            name: donation.name||'',
            sum: donation.sum||'',
            type: donation.type||'',
            vocation: donation.vocation||'',
            condition: donation.condition||'',
            typeOfCurrency: donation.typeOfCurrency||'',
            conversionRate: donation.conversionRate||''
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
            updateDonation(data).unwrap()
           .then(closeAccordion())
        },
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    const handleClear = () => {
        Object.keys(formik.values).forEach(key => {
            formik.setFieldValue(key, '');
        });
    };
    

    return (
        <form onSubmit={formik.handleSubmit} className={`form-container flex flex-wrap gap-3 p-fluid`}>
            <div className="row">
                <TextField
                    id="filled-basic"
                    label="שם הישות המדינית הזרה"
                    variant="outlined"
                    type="text"
                    className="text-field"
                    required
                    error={isFormFieldInvalid("name")}
                    helperText={getFormErrorMessage("name")}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
            </div>
            <div className="row">
                <TextField
                    id="sum"
                    label="סכום התרומה בשח"
                    variant="outlined"
                    type="number"
                    className="text-field"
                    required
                    error={isFormFieldInvalid("sum")}
                    helperText={getFormErrorMessage("sum")}
                    value={formik.values.sum}
                    onChange={formik.handleChange} />
            </div>
            <div className="row">
                <TextField
                    id="type"
                    label="סוג הישות המדינית הזרה"
                    variant="outlined"
                    type="text"
                    className="text-field"
                    required
                    error={isFormFieldInvalid("type")}
                    helperText={getFormErrorMessage("type")}
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon />
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
                    className="text-field"
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
                    sx={{marginBottom: '20px'}}
                    className={`text-field margin-bottom`}
                    value={formik.values.condition}
                    onChange={formik.handleChange} />
            </div>
            <div className="row">
                <TextField
                    id="typeOfCurrency"
                    label="סוג המטבע"
                    variant="outlined"
                    type="text"
                    className="text-field"
                    required
                    error={isFormFieldInvalid("typeOfCurrency")}
                    helperText={getFormErrorMessage("typeOfCurrency")}
                    value={formik.values.typeOfCurrency}
                    onChange={formik.handleChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <ClearIcon />
                                <KeyboardArrowDownIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <div className="row">
                <TextField
                    id="conversionRate"
                    label="שער ההמרה"
                    variant="outlined"
                    type="number"
                    className="text-field"
                    required
                    error={isFormFieldInvalid("conversionRate")}
                    helperText={getFormErrorMessage("conversionRate")}
                    value={formik.values.conversionRate}
                    onChange={formik.handleChange} />
            </div>
            <div className="button-container">
                <Button label="submit" type="submit" variant="contained" className="button" style={{borderRadius:'50px', marginRight:'20px'}}>שמירה</Button>
                <Button label="clean" type="button" variant="outlined" onClick={handleClear} className={`button button-margin`} style={{borderRadius:'50px'}}>ניקוי</Button>
            </div>
        </form>
    );
};

export default UpdateDonationForm;
