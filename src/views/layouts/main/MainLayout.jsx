import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from '../../../routes'
import Header from '../../components/header/Header'
import styles from './MainLayout.module.scss'

function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <div className={styles.layout}>
                    <Routes>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                </div>
            </main>
        </>
    )
}

export default MainLayout