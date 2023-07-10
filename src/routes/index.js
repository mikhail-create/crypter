import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('views/pages/HomePage'));
const UploadPage = lazy(() => import('views/pages/UploadPage'));

const routes = [
    {
        path: '/upload',
        component: <UploadPage />
    },
    {
        path: '/',
        component: <HomePage />
    }
];

export default routes;
