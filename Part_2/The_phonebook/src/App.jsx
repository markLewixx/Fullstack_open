import { useEffect, useState } from 'react'
import Filters from './Filters'
import Persons from './Persons'
import PersonForm from './PersonForm'
import axios from 'axios'

const App = () => {
  // State variables
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('') 
  const[searchValue,setSearchValue]=useState('')
  // Fetch data from server on component mount
  useEffect(() => {
   axios.get('http://localhost:3001/persons')
      .then(res => {
    console.log(res.data)
        setPersons(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault()
   if(persons.find(person => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
    }
    else if(persons.find((person) => person.name === newName)&&persons.find(person => person.number !== newNumber)){
     const person=persons.find(p =>p.name===newName)
      if(window.confirm(`The name ${person.name} already exists in the phonebook. Do you want to replace the old number with the new one?`)){
        axios
        .patch(
          `http://localhost:3001/persons/${person.id}`,
          {number:newNumber})
          .then((res) => {
            setPersons(persons.concat(res.data));
            setNewName('');
            setNewNumber('');
          })
      }
    }
    else {
      axios.post('http://localhost:3001/persons', {
        id: createId(),
        name: newName,
        number: newNumber,
          })
        .then((res) => {
          setPersons(persons.concat(res.data));
          setNewName('');
          setNewNumber('');
        })
        .catch((err) => console.log(err)) 

    }
  }
  //Delete person
  const deletePerson =(id)=>{
    const person = persons.find(p => p.id === id);
    if(window.confirm(`Are you sure you want to delete ${person.name}`)){
      axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch(err=>console.log(err))
  
    }
  }

  // Input change handlers
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearch = (event) => {
    setSearchValue(event.target.value)
  }

  // Filter persons based on search value
  const filterShown = () => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(searchValue.toLowerCase()) || person.number.includes(searchValue)
    )
  }
// Function to create a unique ID
const createId = () => {
  let id = persons.length + 1;
  while (persons.some(person => person.id === id)) {
    id++;
  }
  return ` ${id}`;
};


  // Render component
  return (
    <div>
      <h2>Phonebook</h2>
      {/* Filters component */}
      <Filters searchValue={searchValue} handleSearch={handleSearch}></Filters>
      <br />
      {/* PersonForm component */}
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      ></PersonForm>
      <br />
      {/* Persons component */}
      <Persons 
      filterShown={filterShown()}
      deletePerson={deletePerson}></Persons>
    </div>
  )
}

export default App
