import React from 'react'
import FeatherIcon from 'feather-icons-react'
import DefaultProfile from '../../../assets/images/defaultProfile.jpg'
import './styles.modules.css'

function Navbar() {
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
                    <FeatherIcon className='profile-icon' className='search-icon' size={35} icon="chevron-down" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;