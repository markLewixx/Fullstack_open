  const Persons = ({ filterShown,deletePerson}) => {
  return (
    <>
      <h2>Persons</h2>
      <ul>
        {filterShown.map((person) => (
          <div key={person.id}> 
            <li>{person.name}; {person.number}</li>
            <button onClick={() => deletePerson(person.id)}>Delete</button> 
         </div>
         
        ))}
      </ul>
    </>
  );
};
export default Persons;
