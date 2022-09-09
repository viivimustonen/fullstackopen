import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const noteObject = {
      name: newName,
      id: persons.length + 1,
    };
    setPersons(persons.concat(noteObject));
    setNewName("");
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
    
      <form onSubmit={addPerson}>
      <div>
        name: <input 
          onChange={handleNameChange}
          value={newName} 
        />
        </div>
        <div>
        <button type="submit">add</button>
        </div>
          
      </form>
     
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>{person.name}</p>
      ))}
    </div>
  )

}

export default App
