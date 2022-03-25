import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import SearchDrawer from '../../components/search-drawer/search-drawer.component';
import ReadMore from '../../components/read-more/read-more.component';

function HomePage() {
    return (
        <Fragment>
            <SearchDrawer />
            <ReadMore />
            <Outlet />
        </Fragment>
    );
}

HomePage.displayName = 'HomePage';
export default HomePage;
