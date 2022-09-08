import React from 'react';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ShowFeatureItem from './ShowFeatureItem';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const StyleIcon = styled((props)=><QuestionAnswerOutlinedIcon {...props} />)(({ theme }) => ({
//     // width: 300,
//     // color: theme.palette.success.main,
//     // '& .MuiSlider-thumb': {
//     //   '&:hover, &.Mui-focusVisible': {
//     //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//     //   },
//     //   '&.Mui-active': {
//     //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
//     //   },
//     // },
//     // '&.MuiSvgIcon-root':{
//     //     margin: 0,
//     //     position: 'absolute',
//     //     top: '50%',
//     //     maxWidth: 60,
//     //     transform: 'translateY(-50%)'
//     // }

// }));

const Features = [
    {
        id: 1,
        img:<FontAwesomeIcon icon="fa-regular fa-comments" />,
        title: 'We are now available',
        contact: 'Call +1 555 666 888 for contuct with us'
    },
    {
        id: 2,
        img:<QuestionAnswerOutlinedIcon sx={{ fontSize: 40}} />,
        title: 'International Flight',
        contact: 'Call +1 555 666 888 for booking assistance'
    },
    {
        id: 3,
        img:<QuestionAnswerOutlinedIcon />,
        title: 'Check Refund',
        contact: 'Call +1 555 666 888 for contuct with us'
    },
]

const FeaturesArea = () => {
    return (
            <Container maxWidth="lg" className='mt-16 pb-16'>
            <div className='grid gap-4 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 '>
            {
               Features.map(FeatureItem =><ShowFeatureItem key={FeatureItem.id} FeatureItem={FeatureItem} />) 
            }
            </div>
        </Container>
    );
};

export default FeaturesArea;