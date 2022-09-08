import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ItemsOne from '../../BookingItem/ItemOne/ItemsOne';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 , marginRight: '0px'}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: 'white',
    color: 'black',
  },

  '&.Mui-selected:last-child':{
    borderTopRightRadius: '20px',
    // borderTopLeftRadius: '20px'
  },
  '&.Mui-selected:first-of-type':{
    // borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
  },
  '&.Mui-focusVisible': {
    // backgroundColor: '#d1eaff',
  },
  '&.MuiButtonBase-root':{
    marginRight: '0px',
    paddingLeft: '100px',
    paddingRight: '100px',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    transition: '.3s linear',
  },
  
}));
const ItemTab = styled((props) => <TabPanel  {...props} />)(({ theme }) => ({
  textTransform: 'none',
  backgroundColor: '#fff',

  
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  // marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    // color: 'red',
    opacity: 1,
  },

}));



const Booking = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


    return (
      <div className='flex justify-center bg-amber-50  rounded-tr-3xl rounded-tl-3xl'>
      <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          // disable the tab indicator because it doesn't work well with wrapped container
          TabIndicatorProps={{ sx: { display: 'none' , color: 'black'} }}
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap',
              backgroundColor: '#622243',
              textAlign: 'center',
              borderTopRightRadius: '20px',
              borderTopLeftRadius: '20px',
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
        >
          <StyledTab label="Air Booking"  {...a11yProps(0)}/>
          <StyledTab label="My Trips" {...a11yProps(1)}/>
          <StyledTab label="Check-In" {...a11yProps(2)}/>
          <StyledTab label="Flight Status"  {...a11yProps(3)}/>
        </Tabs>
      </Box>
      <ItemTab value={value} index={0}>
        <ItemsOne />
      </ItemTab>
      <ItemTab value={value} index={1}>
      <ItemsOne />
      </ItemTab>
      <ItemTab value={value} index={2}>
      <ItemsOne />
      </ItemTab>
      <ItemTab value={value} index={3}>
      <ItemsOne />
      </ItemTab>
      </div>
    </div>
    );
};

export default Booking;