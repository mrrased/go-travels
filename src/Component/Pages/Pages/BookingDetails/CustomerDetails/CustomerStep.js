import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [

    'Guest Information',
    'Payment',
    'Confirmation',
];

const CustomerStep = () => {
    return (
        <div className='mt-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={1} alternativeLabel >
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    );
};

export default CustomerStep;