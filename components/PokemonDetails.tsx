import Pokemon from '../models/Pokemon'
import { Evolutions } from './Evolutions'

type PokemonDetailsProps = {
  pokemon: Pokemon
  allPokemons: Pokemon[]
}
export const PokemonDetails = ({
  pokemon,
  allPokemons,
}: PokemonDetailsProps) => {
  console.log(pokemon)
  const { evolutions, classification, maxHP } = pokemon

  return (
    <div className='bg-medium-grey rounded-r-lg'>
      <div className='flex p-8 text-3xl border-b border-dark-grey justify-between'>
        <h1>{pokemon?.name ?? 'Loading...'}</h1>
        <span className='text-my-yellow'>#{pokemon?.number ?? '000'}</span>
      </div>
      <div className='flex flex-col p-8 items-start'>
        <img
          className='object-scale-down rounded-lg max-h-80'
          src={pokemon.image}
        />
        <div className='mt-2'>
          <span className='text-my-yellow'>Type: </span>
          <span>{classification}</span>
        </div>
        <div className='mt-2'>
          <span className='text-my-yellow'>HP: </span>
          <span>{maxHP}</span>
        </div>
        <Evolutions evolutions={evolutions} allPokemons={allPokemons} />
      </div>
    </div>
  )
}
