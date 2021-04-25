import React from 'react';
import styles from './Message.module.css';
import FeatherIcon from 'feather-icons-react'


const Message = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.profileImage} alt="Profile" src={props.item.image} />
            <div className={styles.details}>
                <div className={styles.detailName}>
                    {props.item.name}
                </div>
                <div className={styles.detailText}>
                    {props.item.text}
                </div>
            </div>
            <div className={styles.iconContainer}>
                <FeatherIcon className={styles.icon} size={25} icon={'chevron-right'} />
            </div>
        </div>
    )
}

export default Message;