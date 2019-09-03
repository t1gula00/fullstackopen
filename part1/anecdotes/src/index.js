import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick, text}) => {
	return (
		<button onClick={handleClick}>{text}</button>
	)
}

const MostVotes = ({votes, anecdotes}) => {
	const maxVotes = Math.max(...votes)
	const mostVotesIndex = votes.indexOf( maxVotes )

	if ( maxVotes > 0 ) {
		return (
			<>
			<h1>Anecdote with the most votes</h1>
			<p>{anecdotes[mostVotesIndex]}<br />
			has {votes[mostVotesIndex]} votes</p>
			</>
		)
	}

	return (
		<>
		<h1>Anecdote with the most votes</h1>
		<p>No anecdote has votes yet.</p>
		</>
	)
}

const App = ({anecdotes}) => {
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

	const addVote = (selected) => () => {
		const newVotes = [...votes]
		newVotes[selected]++
		setVotes(newVotes)
	}

  	const setRandomAnecdote = () => () => {
		const max = anecdotes.length
		setSelected(Math.floor(Math.random() * Math.floor(max)))
  	}

  	return (
    	<div>
			<h1>Anecdote of the day</h1>
	  		<p>{anecdotes[selected]}<br />
			has {votes[selected]} votes</p>
	  		<Button handleClick={addVote(selected)} text="Vote" />
	  		<Button handleClick={setRandomAnecdote()} text="Next anecdote" />
			<MostVotes anecdotes={anecdotes} votes={votes} />
    	</div>
  	)
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)