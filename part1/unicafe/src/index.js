import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const  Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
 }

const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({data}) => {
    const { good, neutral, bad } = data

    const numberOfFeedback = good + neutral + bad
    const positiveFeedbacks = (good / (good + neutral + bad)) * 100 + ' %'
    const feedbackAverage = (good - bad) / (good + neutral + bad)

    if ( numberOfFeedback > 0 ) {
        return (
            <div>
                <h1>Statistics</h1>
                <table>
                    <tbody>
                        <Statistic text='Good' value={good} />
                        <Statistic text='Neutral' value={neutral} />
                        <Statistic text='Bad' value={bad} />
                        <Statistic text='Total' value={good + neutral + bad} />
                        <Statistic text='Average' value={feedbackAverage} />
                        <Statistic text='Positive' value={positiveFeedbacks} />
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div>
                <p> No feedback yet</p>
            </div>
        )
    }
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setGoodValue = (newValue) => () => {
        setGood(newValue)
    }

    const setNeutralValue = (newValue) => () => {
        setNeutral(newValue)
    }

    const setBadValue = (newValue) => () => {
        setBad(newValue)
    }

    const feedback = {
        good: good,
        neutral: neutral,
        bad: bad
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={setGoodValue(good + 1)} text='good' />
            <Button handleClick={setNeutralValue(neutral + 1)} text='neutral' />
            <Button handleClick={setBadValue(bad + 1)} text='bad' />
            <Statistics data={feedback} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)