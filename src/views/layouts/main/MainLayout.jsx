import React, { Suspense, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import routes from '../../../routes';
import Header from '../../components/header/Header';
import styles from './MainLayout.module.scss';
import Footer from 'views/components/footer/Footer';

function MainLayout() {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>
        <div className={styles.layout}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />} // Вызов компонента
                />
              ))}
            </Routes>
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
