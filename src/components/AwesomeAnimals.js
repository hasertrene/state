import React, { useState } from 'react';


export default function AwesomeAnimals(props){
  const animals = ["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"]

  return (
  <ul>
    <li>Awesomeness level 1: {animals[0]}</li>
    <li>Awesomeness level 2: {animals[1]}</li>
    <li>Awesomeness level 3: {animals[2]}</li>
    <li>Awesomeness level 4: {animals[3]}</li>
    <li>Awesomeness level 5: {animals[4]}</li>
  </ul>
)
}