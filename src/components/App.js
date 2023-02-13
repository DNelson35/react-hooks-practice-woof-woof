import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import DogDisplay from "./DogDisplay";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [clickedDog, setClickedDog] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(()=> {
    fetch('http://localhost:3001/pups')
    .then(resp => resp.json())
    .then(resp => setDogs(resp))
  },[])

  const onFilter = () => {
   setFilter(!filter)
  }

  const filteredDogs = dogs.filter(dog => dog.isGoodDog === true)

  const onDogClick = (dog) => {
    setClickedDog(dog)
  }

  const updateDogs = (resp) => { setDogs(dogs.map(dog => {
      if(resp.id === dog.id){
        return resp
      }

      return dog
    }))
    setClickedDog(resp)
  }

  return (
    <div className="App">
      <Filter filter={filter} onFilter={onFilter} />
      <DogBar dogs={(filter)? filteredDogs: dogs} onDogClick={onDogClick}/>
      <DogDisplay clickedDog={clickedDog} updateDogs={updateDogs} />
    </div>
  );
}

export default App;
