import React from 'react';

import './footer.styles.css';

import { ReactComponent as Logo } from '../../assets/images/catwikilogo.svg';

function Footer() {
    return (
        <div className="footer">
            <Logo className="footer__logo" />
            <p className="footer__copyright">
                <span>created by </span>
                <a
                    className="footer__creator"
                    href="https://github.com/django-json"
                    target="_blank"
                    rel="noreferrer"
                >
                    django-json
                </a>{' '}
                -{' '}
                <a
                    href="https://devchallenges.io"
                    target="_blank"
                    rel="noreferrer"
                >
                    devChallenges.io 2021
                </a>
            </p>
        </div>
    );
}

Footer.displayName = 'Footer';
export default Footer;
