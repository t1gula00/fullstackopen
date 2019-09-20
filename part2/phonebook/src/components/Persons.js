import React from 'react'
import Person from './Person'

const Persons = ({persons, searchVal, onDeletePerson}) => {

  const filterPersons = () => {
    return persons.filter((person) => {
      if ( person.name.toLocaleLowerCase().indexOf(searchVal.toLowerCase()) !== -1 ) {
        return person;
      }
    })
  }

  const filtPers = filterPersons();

  return (
    <div>
      {
        filtPers.map((person) => 
            <Person 
              key={person.name} 
              person={person} 
              onDeletePerson={() => onDeletePerson(person.id)} 
            />
        )
      }
    </div>
  )
}

export default Persons