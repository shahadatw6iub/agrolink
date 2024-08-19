import React from 'react'
import Herotext from './HeroText';

const Dashboard = () => {
    return (
        <div className="flex-1 p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 h-full">

            <div>
                <Herotext />
            </div>
        </div>
    );
};

export default Dashboard