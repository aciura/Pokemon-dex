import React from 'react'
import Pokemon from '../models/Pokemon'

type PokemonItemProps = {
  pokemon: Pokemon
  select: (pokemon: Pokemon) => void
  isSelected: boolean
}
export const PokemonItem = ({
  pokemon,
  select,
  isSelected,
}: PokemonItemProps) => {
  return (
    <li
      key={pokemon.id}
      onClick={() => select(pokemon)}
      className={`p-4 bg-input-box-grey rounded-md flex flex-row hover:bg-gray-500 ${
        isSelected ? 'border border-my-yellow' : ''
      }`}>
      <img
        src={pokemon.image}
        alt={`${pokemon.name}`}
        className='h-10 w-10 object-cover rounded-full'
      />
      <div className='ml-4 mt-2'>
        <span className='text-my-yellow'>{pokemon.number}</span>
        <span className='ml-2'>{pokemon.name}</span>
      </div>
    </li>
  )
}
