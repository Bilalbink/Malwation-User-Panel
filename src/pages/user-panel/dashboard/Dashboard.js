import React from 'react'
import styles from './Dashboard.module.css'
import Header from './header/Header'
import Graph from './graph/Graph'
import Transactions from './transactions/Transactions'

const Dashboard = () => {
    const headerData = [
        {
            icon: 'plus-circle',
            name: 'Income',
            amount: '2000 TRY',
        },
        {
            icon: 'calendar',
            name: 'Monthly Expenses',
            amount: '1200 TRY',
        },
        {
            icon: 'dollar-sign',
            name: 'Highest Expense',
            amount: '400 TRY',
        },
        {
            icon: 'pocket',
            name: 'Savings',
            amount: '800 TRY',
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <div className={styles.headerContainer}>
                    {headerData.map((item, index) => {
                        return (
                            <Header key={index} item={item} />
                        )
                    })
                    }
                </div>
                <Graph />
                <Transactions />
            </div>
            <div>asdasdasdasd</div>
        </div>
    )
}

export default Dashboard;