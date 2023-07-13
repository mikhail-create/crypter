import React, { lazy } from 'react';

const HomePage = lazy(() => import('views/pages/HomePage'));
const UploadPage = lazy(() => import('views/pages/UploadPage'));
const UploadSinglePage = lazy(() => import('views/pages/UploadSinglePage'));
const ConnectPage = lazy(() => import('views/pages/ConnectPage'));

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
    path: '/connect',
    component: <ConnectPage />
  },
  {
    path: '/',
    component: <HomePage />
  }
];

export default routes;
