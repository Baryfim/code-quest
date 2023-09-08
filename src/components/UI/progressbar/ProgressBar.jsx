import React, { useState, useEffect } from "react";
import classes from './ProgressBar.module.css'

const ProgressBar = ({progress, max}) => {
    const [progressValue, setProgressValue] = useState(0)

    useEffect(() => {
        setProgressValue(Number(progress/max * 100))
    }, [progress, max])

    return (
        <div className={classes.ProgressBar}>
            <div className={classes.ProgressBar__line} style={{width: progressValue+"%"}}></div>
        </div>
    )
}

export default ProgressBar;
