import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
	const parts = course.parts
	const rows  = () => parts.map(part =>
		<Part
			key={part.id}
			name={part.name}
			exercises={part.exercises}
		/>
	)
	return (
		<>
		{rows()}
		</>
	)
}

export default Content;