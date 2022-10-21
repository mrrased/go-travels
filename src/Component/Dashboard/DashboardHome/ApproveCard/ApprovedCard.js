import { Container } from '@mui/material';
import React from 'react';
import ShowApproved from './ShowApproved';


const approvedList = [
    {
        id: 1,
        clientName: 'Terrence Jennifer',
        companyName: 'Qatar Airways',
        texi: 'Yes',
        date: '7 oct 22',
        time: '12:25 AM',
        car: 'No',
    },
    {
        id: 2,
        clientName: 'Victor Helen',
        companyName: 'Lankan Airlines',
        texi: 'No',
        date: '7 oct 22',
        time: '12:25 AM',
        car: 'No',
    },
    {
        id: 3,
        clientName: 'Rosemary Martin',
        companyName: 'Etihad Airway',
        texi: 'No',
        date: '7 oct 22',
        time: '12:25 AM',
        car: 'Yes',
    },
]

const ApprovedCard = () => {
    return (
        <Container maxWidth='lg' className='py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    approvedList.map(list => <ShowApproved key={list.id} list={list} />)
                }
            </div>
        </Container>
    );
};

export default ApprovedCard;