import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('views/pages/HomePage'));
const UploadPage = lazy(() => import('views/pages/UploadPage'));
const UploadSinglePage = lazy(() => import('views/pages/UploadSinglePage'));

const routes = [
    {
        path: '/upload',
        component: <UploadPage />
    },
    {
        path: '/upload/single',
        component: <UploadSinglePage />
    },
    {
        path: '/',
        component: <HomePage />
    }
];

export default routes;
