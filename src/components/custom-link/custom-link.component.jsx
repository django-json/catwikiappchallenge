import React from 'react';
import { Link } from 'react-router-dom';

import './custom-link.styles.css';

const defaultProps = {
    to: '/'
};

function CustomLink({ to, endIcon, children }) {
    function shouldRenderIcon() {
        return endIcon ? <i className="material-icons">{endIcon}</i> : null;
    }

    return (
        <div className="custom-link">
            <div className="custom-link__wrapper">
                <Link className="custom-link__link" to={to}>
                    {children}
                </Link>
                {shouldRenderIcon()}
            </div>
        </div>
    );
}

CustomLink.defaultProps = defaultProps;
CustomLink.displayName = 'CustomLink';
export default CustomLink;
