import React from 'react';

import Header from './header';
import Footer from './footer';

const template = props => (
    <>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </>
);

export default template;