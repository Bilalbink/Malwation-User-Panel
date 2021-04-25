import React from 'react';
import styles from './Reminder.module.css';

const Reminder = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <label className={styles.dateNum}>
                    {props.item.date}
                </label>
                <label className={styles.dateText}>
                    {props.item.day}
                </label>
            </div>
            <div className={styles.reminderText}>
                {props.item.text}
            </div>
        </div>
    )
}

export default Reminder;