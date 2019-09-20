import React from 'react'

const Person = ({person, onDeletePerson}) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={onDeletePerson}>delete</button>
    </div>
  )
}

export default Person