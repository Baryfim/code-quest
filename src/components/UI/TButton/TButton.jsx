import React from "react";
import classes from './TButton.module.css'

const TButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.TButton}>
            {children}
        </button>
    )
}

export default TButton;
