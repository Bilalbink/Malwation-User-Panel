import React from 'react';
import styles from './NotificationBar.module.css';

import Reminder from './reminder/Reminder';
import Message from './message/Message';

import profile1 from '../../../../assets/images/profile1.jpg';
import profile2 from '../../../../assets/images/profile2.jpg';
import profile3 from '../../../../assets/images/profile3.jpg';

const NotificationBar = () => {
    const reminderList = [
        {
            date: '17',
            day: 'Thu',
            text: 'Cancel Chegg subscription'
        },
        {
            date: '21',
            day: 'Mon',
            text: 'Recharge data plan'
        },
        {
            date: '28',
            day: 'Wed',
            text: 'Order laptop battery',
        }
    ];

    const messageList = [
        {
            name: 'Frank Evans',
            text: '1 New Message',
            image: profile1,
        },
        {
            name: 'Sarah Linn',
            text: '2 New Message',
            image: profile2,
        },
        {
            name: 'Clark Davis',
            text: '1 New Message',
            image: profile3,
        },
    ]


    return (
        <div className={styles.container}>
            <div className={styles.title} >
                Messages
            </div>
            {
                messageList.map((item, index) => {
                    return (
                        <Message key={index} item={item}/>
                    )
                })
            }
            <div className={styles.title} style={{ marginTop: 40 }}>
                Reminders
            </div>
            {
                reminderList.map((item, index) => {
                    return (
                        <Reminder key={index} item={item} />
                    )
                })
            }
        </div>
    )
}

export default NotificationBar;