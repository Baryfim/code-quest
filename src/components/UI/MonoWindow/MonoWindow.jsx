import React from "react";
import classes from './MonoWindow.module.css'


const MonoWindow = ({children}) => {
    return (
        <div className={classes.MonoWindow__root}>
            <div className={classes.MonoWindow__main}>
                {children}
            </div>
            <div className={classes.MonoWindow__children_0}></div>
            <div className={classes.MonoWindow__children_1}></div>
        </div>
    )
}

export default MonoWindow;