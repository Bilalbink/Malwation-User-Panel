import React from 'react';
import styles from './Transactions.module.css'
import FeatherIcon from 'feather-icons-react'

const Transactions = () => {
    const tableData = [
        {
            name: 'Grocery',
            date: '25 April 2021',
            amount: '200 TRY'
        },
        {
            name: 'Transport',
            date: '5 February 2021',
            amount: '50 TRY'
        },
        {
            name: 'Phone Data',
            date: '9 February 2021',
            amount: '25 TRY'
        },
        {
            name: 'Rent',
            date: '25 April 2021',
            amount: '400 TRY'
        },
    ];

    return (
        <div className={styles.container}>
            <h2 >Recent Transactions</h2>
            <table style={{ width: '100%' }}>
                {
                    tableData.map((item, index) => {
                        return (
                            <tr className={styles.tableRow} key={index}>
                                <td></td>
                                <td style={{ fontWeight: 500 }}>{item.name}</td>
                                <td style={{ fontSize: 18 }}>{item.date}</td>
                                <td style={{ fontWeight: 500 }}>{item.amount}</td>
                                <td>
                                    <FeatherIcon className={styles.icon} size={25} icon={'more-horizontal'} />
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Transactions;