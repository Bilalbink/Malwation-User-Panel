import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import Dashboard from './dashboard/Dashboard'
import styles from './UserPanel.module.css'

const UserPanel = () => {

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