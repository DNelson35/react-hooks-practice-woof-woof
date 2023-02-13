import React from 'react'

export default function DogDisplay({clickedDog, updateDogs}) {
    const {name, image, isGoodDog, id} = clickedDog


    const handleBadDog = () => {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                isGoodDog: !isGoodDog
            }),      
        })
        .then(resp => resp.json())
        .then(resp => updateDogs(resp))
    }

  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <button onClick={handleBadDog}>{(isGoodDog)? 'Good Dog!' : 'Bad Dog!'}</button>
        </div>
    </div>
  )
}
