import React, { useState, useEffect } from 'react'
import Navbar from './navbar/index'
import Sidebar from './sidebar/index'
import Dashboard from './dashboard'
import styles from './userPanel.module.css'

function UserPanel() {

    useEffect(() => {
        document.title = "User Panel"
    }, []);

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <Sidebar />
                <Dashboard />
            </div>
        </>
    )
}

export default UserPanel;