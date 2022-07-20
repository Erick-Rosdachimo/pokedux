"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('load', () => {
    function getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 1; i <= 151; i++) {
                let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
                let response = yield fetch(url);
                let pokeData = yield response.json();
                let typeName1 = pokeData.types[0].type.name;
                console.log(typeName1);
                let typeName2;
                let typeHTML;
                let typeClass;
                if (pokeData.types.length == 1) {
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
      
    </div>`;
                }
                let container = document.querySelector('.kanto .container-grid');
                container.innerHTML = container.innerHTML +
                    `<div class="box-card type-${typeName1}">
      <div class="box-icon">
        <div class="box-details">
          <div class="icon-info"></div>
        </div>
      </div>
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
          Altura: ${pokeData.height * 10 >= 100 ? pokeData.height / 10 + 'm' : pokeData.height * 10 + 'cm'}
        </p>
      </div>
    </div>`;
            }
        });
    }
    getUser();
});
