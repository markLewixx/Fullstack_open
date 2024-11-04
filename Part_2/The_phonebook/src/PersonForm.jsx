const PersonForm = ({ handleSubmit, handleNameChange, handleNumberChange, newName, newNumber }) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type='text' id="name" value={newName} onChange={handleNameChange} /> 
          <br />
          <label htmlFor="number">Number:</label>
          <input type="number" id='number' value={newNumber} onChange={handleNumberChange} />
        </div>
        <br />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}
export default PersonForm