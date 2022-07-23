"use strict";
function search() {
    let inputElement = document.getElementById('input');
    console.log(inputElement.value);
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputElement.value}`)
        .then(retornoJson => retornoJson.json())
        .then(retornoFull => {
        var _a;
        let typeName1 = retornoFull.types[0].type.name;
        let typeName2;
        let typeHTML;
        let typeClass;
        if (retornoFull.types.length == 1) {
            typeHTML =
                `<div class="box-types">
      <div class="icon ${typeName1}">
        <img src="../assets/icons/${typeName1}.svg" />
      </div>
      <p class="type-text">${typeName1}</p>
    </div>`;
            typeClass = 'oneType';
        }
        else {
            typeClass = 'twoType';
            typeName2 = retornoFull.types[1].type.name;
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
      
    </div>`;
        }
        let container = document.querySelector('body .boxSearch');
        container.innerHTML =
            `<div class="box_search_result">
      <div class="show_less">
      </div>
      <div class="box-card type-${typeName1} searchMode">
      <h2 class="name">${retornoFull.name} | ${retornoFull.id}</h2>
      <div class="box-img">
        <img
          class="poke-img"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${retornoFull.id}.png"
          alt=""
        />
      </div>
      <div class="box-footer ${typeClass}">
        ${typeHTML}
        <p class="pesoAltura">
          Peso: ${retornoFull.weight / 10}kg <br />
          Altura: ${retornoFull.height * 10 >= 100 ? retornoFull.height / 10 + 'm' : retornoFull.height * 10 + 'cm'}
        </p>
      </div>
    </div>
    </div>`;
        (_a = document.querySelector('.box_search_result .show_less')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a;
            let box_search_result = document.querySelector('.box_search_result');
            (_a = document.querySelector('.boxSearch')) === null || _a === void 0 ? void 0 : _a.removeChild(box_search_result);
        });
    })
        .catch(e => {
        alert('Pokemon invalido!');
    });
    inputElement.value = '';
}
