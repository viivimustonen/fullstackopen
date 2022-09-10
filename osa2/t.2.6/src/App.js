import { useState, useEffect} from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import phonebook from "./service/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phonebook.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, [])
  
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
    : phonebook.create(noteObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
    });
  
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

  const handleDelete = (id, name) => {
    window.confirm(`Delete ${name}?`) &&
      phonebook.remove(id).then(() => {
        const newPersons = persons.filter((item) => item.id !== id);
        setPersons(newPersons);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} filter={filter} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} deletePerson={handleDelete}/>
    </div>
  )
}

export default App
