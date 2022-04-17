import React from 'react';

const Header = ({children}) => {
    return (
        <div className='container'>
            <div>
                commun header
            </div>
            {children}
        </div>
    );
};

export default Header;