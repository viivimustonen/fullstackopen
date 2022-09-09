import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0, number: '040-123456' },
    { name: 'Ada Lovelace', id: 1, number: '39-44-5323523' },
    { name: 'Dan Abramov', id: 2, number: '12-43-234345' },
    { name: 'Mary Poppendieck', id: 3, number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)   
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input onChange={handleFilter}/>
      <h2>Add a new</h2>
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
      {filter
        ? persons
          .filter((person) => person.name.includes(filter))
              .map((person) => (
                <p key={person.id}>{person.name} {person.number}</p>
              ))
        : persons.map((person) => (
          <p key={person.id}>{person.name} {person.number}</p>
        ))
      }
    </div>
  )

}

export default App
