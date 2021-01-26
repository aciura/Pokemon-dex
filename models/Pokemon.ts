export default interface Pokemon {
  id: string
  number: string
  name: string
  image: string
  classification: string
  maxHP: number
  attacks: {
    fast: {
      name: string
    }
    special: {
      name: string
    }
  }
  evolutions: Array<{
    id: string
  }>
}
