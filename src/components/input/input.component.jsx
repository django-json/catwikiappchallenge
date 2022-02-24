import React from 'react';
import classNames from 'classnames';

import './input.styles.css';

const defaultProps = {
    type: 'text',
    onChange: () => {}
};

function Input({
    type,
    name,
    id,
    value,
    placeholder,
    endIcon,
    size,
    fullWidth,
    onChange
}) {
    const classes = classNames('input', {
        [`input--${size}`]: size
    });

    const inputContainerClasses = classNames('input-container', {
        'input-container--full-width': fullWidth
    });

    return (
        <div className={inputContainerClasses}>
            <div className="input-wrapper">
                <input
                    className={classes}
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {endIcon && <i className="material-icons">{endIcon}</i>}
            </div>
        </div>
    );
}

Input.defaultProps = defaultProps;
Input.displayName = 'Input';
export default Input;
