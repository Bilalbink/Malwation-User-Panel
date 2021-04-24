import React from 'react'
import styles from './Dashboard.module.css'
import Header from './header/Header'

const Dashboard = () => {
    const headerData = [
        {
            icon: 'plus-circle',
            name: 'Income',
            amount: '$2000',
        },
        {
            icon: 'calendar',
            name: 'Monthly Expenses',
            amount: '$1200',
        },
        {
            icon: 'dollar-sign',
            name: 'Highest Expense',
            amount: '$400',
        },
        {
            icon: 'pocket',
            name: 'Savings',
            amount: '$800',
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                {headerData.map((item, index) => {
                    return (
                        <Header key={index} item={item} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Dashboard;