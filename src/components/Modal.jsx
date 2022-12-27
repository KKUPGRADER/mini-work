import { useState } from "react";
import classes from "./_Components.module.scss";

export default function Modal() {

    const [open, setOpen] = useState(false)

    return (
        <div className={classes.ModalArea}>
            <button className={classes.ModalButton} onClick={() => setOpen(!open)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ "fill": "white" }}><path fillRule="evenodd" clipRule="evenodd" d="M2 11h1V6.99H2V11zm1-5.01V5.5l.5-.5h4.43l.43.25.43.75h5.71l.5.5v8l-.5.5h-11l-.5-.5V12H1.5l-.5-.5v-9l.5-.5h4.42l.44.25.43.75h5.71l.5.5V6l-1-.03V4H6.5l-.43-.25L5.64 3H2v2.99h1zm5.07.76L7.64 6H4v3h3.15l.41-.74L8 8h6V7H8.5l-.43-.25zM7.45 10H4v4h10V9H8.3l-.41.74-.44.26z" /></svg>
            </button>
            <div className={classes.Modal + (open ? " " + classes.isOpen : "")}>
                <div className={classes.Header}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" /></svg>
                </div>

                <div className={classes.Body}>

                    <h3>This is our pop Up</h3>
                    <p>
                        Display files here ----
                    </p>
                    <div className={classes.Footer}>
                        <button className={classes.button}>May be Later</button>
                        <button className={classes.button}>Yes , Sure!</button>
                    </div>
                </div>
            </div>
        </div>)
}