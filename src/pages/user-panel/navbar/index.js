import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import DefaultProfile from '../../../assets/images/defaultProfile.jpg'
import styles from './navbar.module.css'

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.logo}>UPANEL</div>
            <div className={styles.sideItemsContainer}>
                <div className={styles.searchbarForm}>
                    <FeatherIcon className={styles.searchIcon} size={35} icon="search" />
                    <input size={35} className={styles.searchbar} type="text" placeholder="Search" />
                </div>
                <div className={styles.profileContainer}>
                    <img className={styles.profileImage} alt="Profile" src={DefaultProfile} />
                    <div className={styles.profileDetails}>
                        <label className={styles.profileName}>
                            Jon Doe
                        </label>
                        <label>
                            Frontend Developer
                        </label>
                    </div>
                    <div className={styles.dropdown} onClick={() => setDropdown(!dropdown)}>
                        <FeatherIcon className={styles.dropdownIcon} size={35} icon={dropdown ? 'chevron-up' : 'chevron-down'} />
                        {dropdown ?
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
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;