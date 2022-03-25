import React from 'react';

import './footer.styles.css';

import { ReactComponent as Logo } from '../../assets/images/catwikilogo.svg';
import CustomLink from '../custom-link/custom-link.component';

function Footer() {
    return (
        <div className="footer">
            <CustomLink to=".">
                <Logo className="footer__logo" />
            </CustomLink>
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
