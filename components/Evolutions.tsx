import Pokemon from '../models/Pokemon'

type EvolutionsProps = {
  evolutions: { id: string }[]
  allPokemons: Pokemon[]
}

export const Evolutions = ({ evolutions, allPokemons }: EvolutionsProps) => {
  if (!evolutions || !evolutions.length) return null
  const evolutionIds = evolutions?.map((e) => e.id)

  return (
    <div className='space-y-4 mt-4'>
      <h2 className='text-my-yellow'>Evolutions</h2>
      {allPokemons
        ?.filter((p) => evolutionIds.includes(p.id))
        ?.map((evolution) => (
          <div className='w-1/3 flex space-x-4'>
            <img
              className='rounded-md object-scale-down max-h-32'
              src={evolution.image}
              alt={evolution.name}
            />
            <span>{evolution.name}</span>
          </div>
        ))}
    </div>
  )
}
