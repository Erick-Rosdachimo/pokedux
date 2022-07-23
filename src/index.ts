window.addEventListener('load', () => {
async function getUser() {
 for (let i = 1; i <= 151; i++) { 
  let url = `https://pokeapi.co/api/v2/pokemon/${i}`
    let result = await fetch(url);
    let pokeData = await result.json();
    let typeName1 = pokeData.types[0].type.name;
    let typeName2:string;
    let typeHTML:string;
    let typeClass:string;
    
    if(pokeData.types.length == 1){
      typeHTML =
      `<div class="box-types">
      <div class="icon ${typeName1}">
        <img src="../assets/icons/${typeName1}.svg" />
      </div>
      <p class="type-text">${typeName1}</p>
    </div>`
    typeClass = 'oneType';
    }else{
      typeClass = 'twoType';
      typeName2 = pokeData.types[1].type.name;
      typeHTML =
     `<div class="box-types">
        <div class="icon ${typeName1}">
          <img src="../assets/icons/${typeName1}.svg" />
        </div>
        <p class="type-text">${typeName1}</p>
        <div class="icon ${typeName2}">
          <img src="../assets/icons/${typeName2}.svg" />
        </div>
        
        <p class="type-text">${typeName2}</p>
      
    </div>`
    }
    

    let container = document.querySelector('.kanto .container-grid') as HTMLElement
    container.innerHTML = container.innerHTML + 
      `<div class="box-card type-${typeName1}">
      <h2 class="name">${pokeData.name} | ${pokeData.id}</h2>
      <div class="box-img">
        <img
          class="poke-img"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png"
          alt=""
        />
      </div>

      <div class="box-footer ${typeClass}">
        ${typeHTML}
        <p class="pesoAltura">
          Peso: ${pokeData.weight / 10}kg <br />
          Altura: ${pokeData.height * 10 >= 100 ? pokeData.height / 10 +'m' : pokeData.height *10 +'cm'}
        </p>
      </div>
    </div>`
}
}
getUser()
})
