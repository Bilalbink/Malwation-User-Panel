import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import DefaultProfile from '../../../assets/images/defaultProfile.jpg'
import styles from './navbar.module.css'

import Dropdown from './dropdown/index'

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
                            <Dropdown />
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