import React from 'react'

export default function DogBtn({dog , onDogClick}) {
  return (
    <span onClick={() => onDogClick(dog)}>{dog.name}</span>
  )
}
