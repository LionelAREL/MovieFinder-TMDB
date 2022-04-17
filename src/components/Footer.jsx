import React from 'react';

const Footer = ({children}) => {
    return (
        <div className='container'>
            <div>
                commun footer
            </div>
            {children}
        </div>
    );
};

export default Footer;