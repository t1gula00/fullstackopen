import React from 'react'

const PersonForm = ({onNewPersonSubmit, newName, handleNewName, newPhone, handleNewPhone}) => {
  return (
    <form onSubmit={onNewPersonSubmit}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handleNewPhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm;