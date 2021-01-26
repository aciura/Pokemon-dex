import React from 'react'
import { PokemonItem } from './PokemonItem'

export const PokemonList = ({ pokemons, selectedPokemon, select }) => {
  return (
    <ul className='flex flex-col space-y-4 px-8 pt-8'>
      {pokemons.map((pokemon) => (
        <PokemonItem
          pokemon={pokemon}
          select={select}
          isSelected={selectedPokemon.id === pokemon.id}
        />
      ))}
    </ul>
  )
}
