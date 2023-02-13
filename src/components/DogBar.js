import React from 'react'
import DogBtn from './DogBtn'

export default function DogBar({dogs, onDogClick}) {
    const dogList = dogs.map(dog => <DogBtn key={dog.id} dog={dog} onDogClick={onDogClick} />  )
  return (
    <div id="dog-bar">
        {dogList}
    </div>
  )
}
