import React from 'react';
import styles from './Graph.module.css'

const Graph = () => {
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

    const yAxis = [300, 250, 200, 150, 100, 50, 0];
    return (
        <div className={styles.container}>
            <div className={styles.graphContainer}>
                <div className={styles.yLabelsList}>
                    {
                        yAxis.map((data, index) => {
                            return (
                                <div key={index} className={styles.yLabel}>{data}</div>
                            )
                        })
                    }
                </div>
                <div>
                    <div className={styles.graph}>
                        {
                            graphData.map((item, index) => {
                                return (
                                    <div key={index} className={styles.bar} style={{ height: item.amount }}></div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.xLabelList}>
                        {
                            graphData.map((item, index) => {
                                return (
                                    <div key={index} className={styles.xLabel} >{item.name}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Graph;