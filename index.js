console.log('a')
function search() {
  const api = 'https://pokeapi.co/api/v2/pokemon/160'
  fetch(api)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      console.log(result.id)
      console.log(result.name)
    })
}

/*


nome
id
tipos
peso
altura


*/
