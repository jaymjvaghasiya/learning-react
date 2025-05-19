import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../MyButton'

export const HotStarMovies = () => {

  const movies = [
    {
      "id": 1001,
      "name": "Inception"
    },
    {
      "id": 1002,
      "name": "The Dark Knight"
    },
    {
      "id": 1003,
      "name": "Interstellar"
    },
    {
      "id": 1004,
      "name": "The Matrix"
    },
    {
      "id": 1005,
      "name": "Fight Club"
    }
  ]

  const playMovies = () => {
    alert("Movie playing...");
  }

  return (
    <>
      <h1>Movies</h1>
      <ul>
        {
          movies.map((m) => {
            return <li>
              <Link to={`/playcontent/${m.id}`}>{m.name}</Link>
            </li>
          })
        }
      </ul>
      <MyButton name="Play Movie" class="btn btn-primary" myFun={playMovies}></MyButton>
    </>
  )
}
