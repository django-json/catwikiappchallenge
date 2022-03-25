import React from 'react';

import './button.styles.css';

const defaultProps = {
    type: 'button'
};

function Button({ label, iconAsLabel, type, className, onClick }) {
    return (
        <button className="btn" type={type} onClick={onClick}>
            {label}
            {iconAsLabel && <i className="material-icons">{iconAsLabel}</i>}
        </button>
    );
}

Button.defaultProps = defaultProps;
Button.displayName = 'Button';
export default Button;
