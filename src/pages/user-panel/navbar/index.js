import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
import DefaultProfile from '../../../assets/images/defaultProfile.jpg'
import './styles.modules.css'

function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className='navbar'>
            <div className="logo">UPANEL</div>
            <div className='side-items-container'>
                <div className='searchbar-form'>
                    <FeatherIcon className='search-icon' size={35} icon="search" />
                    <input size={35} className='searchbar' type="text" placeholder="Search" />
                </div>
                <div className='profile-container'>
                    <img className="profile-image" alt="Profile" src={DefaultProfile} />
                    <div className='profile-details'>
                        <label className='profile-name'>
                            Jon Doe
                        </label>
                        <label>
                            Frontend Developer
                        </label>
                    </div>
                    <div className='dropdown' onClick={() => setDropdown(!dropdown)}>
                        <FeatherIcon className='dropdown-icon' size={35} icon={dropdown ? 'chevron-up' : 'chevron-down'} />
                        {dropdown ?
                            <div className="popup-list">
                                <div className='popup-item'>
                                    <FeatherIcon className='profile-icon' size={25} icon="user" />
                                    <span className="popup">My Profile</span>
                                </div>
                                <div className='popup-item'>
                                    <FeatherIcon className='profile-icon' size={25} icon="settings" />
                                    <span className="popup">Settings</span>
                                </div>
                                <hr></hr>
                                <div className='popup-item'>
                                    <FeatherIcon className='profile-icon' size={25} icon="log-out" />
                                    <span className="popup">Logout</span>
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