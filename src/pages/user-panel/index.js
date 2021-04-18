import React, { useState, useEffect }  from 'react'
import Navbar from './navbar/index'
import Sidebar from './sidebar/index'
import './styles.modules.css'

function UserPanel() {

    useEffect(() => {
        document.title = "User Panel"
     }, []);

    return (
        <>
            <Navbar/>
            <Sidebar />
        </>
    )
}

export default UserPanel;