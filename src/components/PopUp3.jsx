import classes from "./_Components.module.scss";


const FeedbackOptions = [
    "1",
    "2",
    "3",
    "4",
    "5"
]
export default function PopUp3() {


    return (<div className={classes.PopUp_3}>
        <div className={classes.Header}>
            <div className={classes.Close}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" /></svg>
            </div>
        </div>

        <div className={classes.Body}>

            <h3>How satisfied are you using our
                invoicing feature?</h3>
            <ul>
                {
                    FeedbackOptions.map((item, index) => {
                        return (
                            <li key={index}>
                                <input type="checkbox" name={item} id={item.replace(" ", "_")} />
                                <label htmlFor={item.replace(" ", "_")}>
                                    {item}
                                </label>
                            </li>)
                    })
                }

            </ul>

            <hr />
            <button className={classes.Submit}>Submit</button>
        </div>

    </div>)
}