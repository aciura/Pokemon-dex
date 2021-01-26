import React from 'react'
import { PokemonDetails } from '../components/PokemonDetails'
import Pokemon from '../models/Pokemon'
import { PokemonList } from '../components/PokemonList'
import { Paging } from '../components/Paging'
import { getPokemons } from '../services/pokemonService'

type PokedexProps = {
  pokemons: Pokemon[]
}

export default function Pokedex({ pokemons }: PokedexProps) {
  const [page, setPage] = React.useState(1)
  const perPage = 8
  const maxPages = Math.ceil(pokemons.length / perPage)
  const [pokemonsOnPage, setPokemonsOnPage] = React.useState([])
  const [selectedPokemon, setSelectedPokemon] = React.useState<Pokemon>(
    pokemons?.length ? pokemons[0] : null,
  )

  React.useEffect(() => {
    setPokemonsOnPage(pokemons.slice((page - 1) * perPage, page * perPage))
  }, [page, pokemons, maxPages])

  return (
    <main className='w-full min-h-screen flex justify-center items-center bg-light-grey text-white'>
      <div className='rounded-lg grid grid-cols-layout bg-dark-grey w-full min-h-screen lg:max-w-7xl lg:w-10/12 lg:min-h-0'>
        <div className='flex flex-col justify-between pt-4'>
          <PokemonList
            pokemons={pokemonsOnPage}
            select={setSelectedPokemon}
            selectedPokemon={selectedPokemon}
          />
          <Paging page={page} maxPages={maxPages} setPage={setPage} />
        </div>

        <PokemonDetails pokemon={selectedPokemon} allPokemons={pokemons} />
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const data = await getPokemons()
  return {
    props: {
      pokemons: data.pokemons,
    },
  }
}
