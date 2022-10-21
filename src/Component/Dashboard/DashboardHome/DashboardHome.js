import React from 'react';
import ApprovedCard from './ApproveCard/ApprovedCard';
import TotalViewArea from './TotalViewArea/TotalViewArea';
import Banner from './Banner';

const DashboardHome = () => {
    return (
        <div>
            <Banner />
            <TotalViewArea />
            <ApprovedCard />
        </div>
    );
};

export default DashboardHome;