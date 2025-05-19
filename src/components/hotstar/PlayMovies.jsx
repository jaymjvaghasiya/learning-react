import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayMovies = () => {

    const m_id = useParams().id;

  return (
    <>
        <h1>PlayMovies {m_id}</h1>
    </>
  )
}
