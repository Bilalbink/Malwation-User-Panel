import React from 'react'
import styles from './Dashboard.module.css'

import Header from './header/Header'
import Graph from './graph/Graph'
import Transactions from './transactions/Transactions'
import NotificationBar from './notificationBar/NotificationBar'
import InfoCard from './infoCard/InfoCard'

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
    ];

    const graphData = [
        {
            name: 'Mon',
            amount: 50
        },
        {
            name: 'Tue',
            amount: 100
        },
        {
            name: 'Wed',
            amount: 65
        },
        {
            name: 'Thu',
            amount: 35
        },
        {
            name: 'Fri',
            amount: 200
        },
        {
            name: 'Sat',
            amount: 65
        },
        {
            name: 'Sun',
            amount: 90
        },
    ];

    const graphDetailData = [
        {
            date: '10 Friday 2021',
            amount: 200
        },
        {
            date: '9 Thursday 2021',
            amount: 50
        },
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
                <div className={styles.graphContainer}>
                    <Graph graphData={graphData} />
                    <div>
                        {
                            graphDetailData.map((item, index) => {
                                return (
                                    <InfoCard key={index} item={item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.transactionsContainer}>
                    <Transactions />
                </div>

            </div>
            <NotificationBar />
        </div>
    )
}

export default Dashboard;