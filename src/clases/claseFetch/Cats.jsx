import React from 'react'

const Cats = ({pokemon}) => {
  return (
    <>
            <div>
                <p>HECHO:{pokemon.name}</p>
                <p>LARGO:{pokemon.url} </p>

            </div>
    </>
  )
}

export default Cats