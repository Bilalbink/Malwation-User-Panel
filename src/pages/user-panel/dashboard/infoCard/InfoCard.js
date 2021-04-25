import React from 'react';
import styles from './InfoCard.module.css';

const InfoCard = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                {props.item.date}
            </div>
            <div className={styles.amount}>
                {props.item.amount + " TRY"}
            </div>
        </div>
    )
}

export default InfoCard;