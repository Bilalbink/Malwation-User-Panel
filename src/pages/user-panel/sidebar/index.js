import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react'
import styles from './sidebar.module.css'

function Sidebar() {
    const [active, setActive] = useState(-1);
    const iconList = ['home', 'mail', 'user', 'settings', 'bar-chart-2']

    function selectPage(index) {
        setActive(index);
    }

    return (
        <div className={styles.container}>
            {iconList.map((icon, index) => {
                return (
                    <div key={index} className={index == active ? styles.activeIconContainer : styles.iconContainer} onClick={() => selectPage(index)}>
                        <FeatherIcon  className={index == active ? styles.activeIcon : styles.sidebarIcon} size={40} icon={icon}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar;