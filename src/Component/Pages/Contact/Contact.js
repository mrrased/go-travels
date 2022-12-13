import React from 'react';
import BottomFooter from '../../Shared/BottomFooter/BottomFooter';
import NavBar from '../../Shared/NavBar/NavBar';
import TopBar from '../../Shared/TopBar/TopBar';
import TopFooter from '../../Shared/TopFooter/TopFooter';
import ContactBanner from './ContactBanner/ContactBanner';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
    return (
        <div>
            <TopBar />
            <NavBar />
            <ContactBanner />
            <ContactForm />
            <TopFooter />
            <BottomFooter />
        </div>
    );
};

export default Contact;