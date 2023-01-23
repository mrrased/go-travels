import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../Hooks/useAuth';

const ShowListItems = ({ list }) => {

    const [controlAdmin ,  setControlAdmin] = useState();
    const { accessPower } = useAuth();

    

    return (
        <div>
            <ListItem key={ list?.text } disablePadding>
                <ListItemButton onClick={ list?.onClick }>
                    <ListItemIcon sx={{ justifyContent: 'center', color: '#622243' }}>
                        { list?.icon }
                    </ListItemIcon>
                    <ListItemText primary={ list?.text } sx={{':hover': 'underline'}} />
                </ListItemButton>
            </ListItem>
        </div>
    );
};

export default ShowListItems;