import React from 'react';

const Total = ({ course }) => {
	const parts = course.parts
	const exercises = parts.map( part => part.exercises ).reduce( (sum, currentValue) => sum + currentValue )
	return (
		<h3>total of {exercises} exercises</h3>
	)
}

export default Total;