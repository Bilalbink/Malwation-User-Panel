import React from 'react'
import styles from './Dropdown.module.css'
import FeatherIcon from 'feather-icons-react'

const Dropdown = () => {
    return (
    <div className={styles.popupList}>
        <div className={styles.popupItem}>
            <FeatherIcon className={styles.profileIcon} size={25} icon="user" />
            <span className={styles.popup}>My Profile</span>
        </div>
        <div className={styles.popupItem}>
            <FeatherIcon className={styles.profileIcon} size={25} icon="settings" />
            <span className={styles.popup}>Settings</span>
        </div>
        <hr></hr>
        <div className={styles.popupItem}>
            <FeatherIcon className={styles.profileIcon} size={25} icon="log-out" />
            <span className={styles.popup}>Logout</span>
        </div>
    </div>
    )
}

export default Dropdown;