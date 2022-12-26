import classes from "./_Components.module.scss";
import Feedback from "../assets/feedback.png";

const FeedbackOptions = [
    "Solution was not clear/correct",
    "Solution not available",
    "Price is too high",
    "Not needed anymore",
    "Other reasons"
]

export default function PopUp2() {


    return (<div className={classes.PopUp_2}>
        <div className={classes.Illustration}>
            <img src={Feedback} alt="Feedback" />
        </div>

        <div className={classes.Information}>
            <h2>
                We wish to know what put you off?
            </h2>
            <ul>
                {
                    FeedbackOptions.map((item, index) => {
                        return (<li key={index}>
                            <input type="checkbox" name={item} id={item.replace(" ", "_")} />
                            <label htmlFor={item.replace(" ", "_")}>
                                {item}
                            </label>
                        </li>)
                    })
                }

            </ul>
            <textarea placeholder="Write your Feedback">

            </textarea>
            <div className={classes.BtnContainer}>
                <button className={classes.button}>No</button>
                <button className={classes.button}>Yes</button>
            </div>

        </div>

    </div>)
}