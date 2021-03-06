import React from 'react';
import { Link } from 'react-router-dom';

import './custom-link.styles.css';

const defaultProps = {
    to: '/'
};

function CustomLink({ to, endIcon, variant, target, children }) {
    function shouldRenderIcon() {
        return endIcon ? <i className="material-icons">{endIcon}</i> : null;
    }

    function shouldRenderLink() {
        if (variant === 'external') {
            return (
                <a
                    className="custom-link__link"
                    href={to}
                    target={target}
                    rel="noreferrer"
                >
                    {children}
                </a>
            );
        }

        return (
            <Link className="custom-link__link" to={to}>
                {children}
            </Link>
        );
    }

    return (
        <div className="custom-link">
            <div className="custom-link__wrapper">
                {shouldRenderLink()}
                {shouldRenderIcon()}
            </div>
        </div>
    );
}

CustomLink.defaultProps = defaultProps;
CustomLink.displayName = 'CustomLink';
export default CustomLink;
