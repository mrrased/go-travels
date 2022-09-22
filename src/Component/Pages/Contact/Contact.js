import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import TopBar from '../../Shared/TopBar/TopBar';
import ContactBanner from './ContactBanner/ContactBanner';

const Contact = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <ContactBanner />
        </div>
    );
};

export default Contact;