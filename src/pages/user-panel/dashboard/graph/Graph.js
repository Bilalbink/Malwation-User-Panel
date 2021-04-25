import React from 'react';
import styles from './Graph.module.css'

const Graph = (props) => {

    const yAxis = [300, 250, 200, 150, 100, 50, 0];
    return (
        <div className={styles.container}>
            <h2 >Weekly Spendings</h2>

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
                            props.graphData.map((item, index) => {
                                return (
                                    <div key={index} className={styles.bar} style={{ height: item.amount }}></div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.xLabelList}>
                        {
                            props.graphData.map((item, index) => {
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