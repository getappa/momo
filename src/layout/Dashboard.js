import React from 'react';

export const DashboardLayout = ({ children }) => {
    return (
        <div>
            <header>
                Header
            </header>
            <main>
                {children}
            </main>
        </div>
    )
};

export default DashboardLayout;