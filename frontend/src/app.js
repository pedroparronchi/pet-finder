import React from 'react';
import { ToastProvider} from 'react-toast-notifications'
import Routes from './routes';

import './assets/css/styles.css';

const app = () => (
    <ToastProvider>
        <Routes />
    </ToastProvider>
)

export default app;