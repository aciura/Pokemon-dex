import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const pokemonQuery = (page, perPage = 10) => `{
  pokemons(first: ${page * perPage}) {
    id
    number
    name
    image
    classification
    maxHP
    attacks {
      fast {
        name
      }
      special {
        name
      }
    }
    evolutions {
      id
    }
  }
}`

export const getPokemons = async () => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache(),
  })
  const { data } = await client.query({
    query: gql(pokemonQuery(1, 999)),
  })
  return data
}
