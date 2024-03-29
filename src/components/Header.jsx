import React from 'react';

const Header = ({title}) => {
    return (
        <div className='header'>
            <h1 className='titulo'>{title}</h1>
        </div>
    );
};

export default Header;