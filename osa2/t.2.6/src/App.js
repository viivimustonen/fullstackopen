import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 , number: '040-1231244'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target) 
    const noteObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber
    };
    persons.some((p) => p.name === newName)
    ? window.alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(noteObject))
  
    setNewName("");
    setNewNumber("");
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)   
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
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
        number: <input 
          onChange={handleNumberChange}
          value={newNumber} 
        />
        </div>
        <div>
        <button type="submit">add</button>
        </div>
          
      </form>
     
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
    </div>
  )

}

export default App
