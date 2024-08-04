import { useParams } from "react-router-dom"

function Pokemon() {
  const {name} = useParams()
  return (
    <h1>Showing data of pokemon name: {name}</h1>
  )
}

export default Pokemon
