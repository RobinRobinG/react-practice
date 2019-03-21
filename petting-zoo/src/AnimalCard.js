import React from 'react';
const AnimalCard = (props) => {
  return (
    <div className = "card">
      <h2>{props.name}</h2>
      <hr />
      <button onClick = {()=> props.onPetAnimal(props.name)} className = "btn btn-primary">{`Pet the ${props.name}`}</button>
    </div>
  )
}
export default AnimalCard;