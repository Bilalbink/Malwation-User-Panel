import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react'
import './styles.modules.css'

function Sidebar() {
    const [active, setActive] = useState(-1);
    const iconList = ['home', 'mail', 'user', 'settings', 'bar-chart-2']

    function selectPage(index) {
        setActive(index);
    }

    return (
        <div className='container'>
            {iconList.map((icon, index) => {
                return (
                    <div key={index} className={index == active ? 'active-icon-container' : 'icon-container'} onClick={() => selectPage(index)}>
                        <FeatherIcon  className={index == active ? 'active-icon' : 'sidebar-icon'} size={40} icon={icon}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar;