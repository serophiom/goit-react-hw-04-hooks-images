import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button ({ clickOnButton }) {
    return (
        <button className="Button" type="button" onClick={clickOnButton}>
            Load more
        </button>
    );
}

Button.propTypes = {
    clickOnButton: PropTypes.func.isRequired,
}