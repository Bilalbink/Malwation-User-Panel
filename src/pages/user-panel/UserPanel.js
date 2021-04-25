import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard'
import styles from './UserPanel.module.css'

const UserPanel = () => {

    useEffect(() => {
        document.title = "RightBrain"
    }, []);

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.bottomContainer}>
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    )
}

export default UserPanel;