import React from 'react'
import styles from './Header.module.css'
import FeatherIcon from 'feather-icons-react'


function HeaderCard(props) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <FeatherIcon className={styles.icon} size={35} icon={props.item.icon} />
            </div>
            <div className={styles.textContainer}>
                <label className={styles.topText}>
                    {props.item.name}
                </label>
                <label className={styles.priceText}>
                    {props.item.amount}
                </label>
            </div>

        </div>
    )
}

export default HeaderCard;