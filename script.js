// semana 1 //-----------------------------------------------------------------

// Pet's

// const pet = "Ozzy";
// let idade = 8;
// const dog = true;

// const pet2 = "Erick";
// let idade2 = 15;
// const dog2 = true;

// const pet3 = "Alice";
// let idade3 = 5;
// const dog3 = false;

// let media = (idade + idade2 + idade3) / 3;

// console.log(media)

// const verificarDog = dog && dog2 && dog3;
// console.log(verificarDog)

// semana 2 // -----------------------------------------------------------------

// // Pet's


// const nome = "Ozzy";
// let idade = 8;
// const dog = true;
// let alimentacao =  [ "Ração" , "Arroz" , "linguiça" ] ;

// const nome2 = "Erick";
// let idade2 = 15;
// const dog2 = true;
// let alimentacao2 =  [ "Ração" , "Arroz" , "linguiça" , "Palitinhos" ] ;

// const nome3 = "Alice" ;
// let idade3 = 5;
// const dog3 = false;
// let alimentacao3 =  [ "Ração"] ;


// console.log (`nome: ${nome.toLocaleUpperCase()} \n idade:${idade} \n é um cachorro: ${dog} \n gosta de comer: ${alimentacao}`);
// console.log (`nome: ${nome2.toLocaleUpperCase()} \n idade:${idade2} \n é um cachorro: ${dog2} \n gosta de comer: ${alimentacao2}`);
// console.log (`nome: ${nome3.toLocaleUpperCase()} \n idade:${idade3} \n é um cachorro: ${dog3} \n gosta de comer: ${alimentacao3}`);


// semana 3 //-------------------------------------------------------------------

// Pet's

// Pet = { 

//     nome: "Ozzy",
//     idade: 8,
//     dog: true,
//     alimentacao:  [ "Ração" , "Arroz" , "linguiça" ],
// };

// Pet2 = {

//     nome: "Erick",
//     idade: 15,
//     dog: true,
//     alimentacao: [ "Ração" , "Arroz" , "linguiça" , "Palitinhos" ],

// };

// Pet3 = {

//     nome: "Alice",
//     idade: 5,
//     dog: false,
//     alimentacao: [ "Ração"],

// };

// let animais = [];

// console.log(animais);

// animais.push(Pet, Pet2, Pet3);

// semana 4 //-------------------------------------------------------------

// Pet's

// Pet = { 

//     nome: "Ozzy",
//     idade: 8,
//     dog: true,
//     alimentacao:  [ "Ração" , "Arroz" , "linguiça" ],
// };

// Pet2 = {

//     nome: "Erick",
//     idade: 15,
//     dog: true,
//     alimentacao: [ "Ração" , "Arroz" , "linguiça" , "Palitinhos" ],

// };

// Pet3 = {

//     nome: "Alice",
//     idade: 5,
//     dog: false,
//     alimentacao: [ "Ração"],

// };

// let animais = [];

// if(Pet.dog){
//     animais.push(Pet)
// }else{
//     alert( Pet.nome + " não foi incluído!")
// };

// if(Pet2.dog){
//     animais.push(Pet2)
// }else{
//     alert( Pet2.nome + " não foi incluído!")
// };

// if(Pet3.dog){
//     animais.push(Pet3)
// }else{
//     alert( Pet3.nome + " não foi incluído(a)!")
// };

// console.log(animais);

// semana 5 //------------------------------------------------------------------

// Pet's

Pet = { 

    nome: "Ozzy",
    idade: 8,
    dog: true,
    alimentacao:  [ "Ração" , "Arroz" , "linguiça" ],
    item: "",
    imagem:"https://cdn.artphotolimited.com/images/5fb28218bd40b870a885a405/300x300/ozzy-osbourne-portrait-session.jpg",
    link:""

};

Pet2 = {

    nome: "Erick",
    idade: 15,
    dog: true,
    alimentacao: [ "Ração" , "Arroz" , "linguiça" , "Palitinhos" ],
    item: "",
    imagem:"https://upload.wikimedia.org/wikipedia/en/7/78/Eric_Clapton_-_2010_Clapton_Album_Art.jpg",
    link:""

};

Pet3 = {

    nome: "Bigode",
    idade: 5,
    dog: true,
    alimentacao: [ "Ração"],
    item: "",
    imagem:"https://pbs.twimg.com/profile_images/422207085615386625/_9jR_8uz_400x400.jpeg",
    link:""

};

let animais = [];

if(Pet.dog){
    animais.push(Pet)
}else{
    // alert( Pet.nome + " não foi incluído!")
};

if(Pet2.dog){
    animais.push(Pet2)
}else{
    // alert( Pet2.nome + " não foi incluído!")
};

if(Pet3.dog){
    animais.push(Pet3)
}else{
    // alert( Pet3.nome + " não foi incluído(a)!")
};

console.log(animais);

for(let i = 0; i < animais.length; i++) {
    animais[i].alimentacao = animais[i].alimentacao.join(", ")
    console.log(animais[i].alimentacao)
}

for( let i in animais) {
    animais[i].item = `
    nome: ${animais [i].nome}
    idade: ${animais [i].idade}
    dog: ${animais [i].dog}
    alimentacao: ${animais [i].alimentacao}
    `
    console.log(animais[i].item)
}

// semana 6 //-------------------------------------------------------------


//   const retornarArray = (String, animais) => {
//     let resposta = []
//     for (let i in animais) {
//       if (animais[i].nome.toUpperCase() === String.toUpperCase()) {
//         resposta.push(animais[i])
//       }
//     }

// //     part 02

//     if (resposta.length > 0) {
//       return resposta
//     } else {
//       alert("Item não encontrado")
  
//     }
//   }

// console.log(retornarArray("pingo", animais));

// semana 11 //-----------------------------------------------------------

function ListaBichinhos(animais) {
  const bichinhoFofinhos = document.getElementById("Bichinhos")
  bichinhoFofinhos.innerHTML= ""

  for ( let i of animais){
    bichinhoFofinhos.innerHTML += `
    <section class="meu-pet"> 
    <img src=" ${i.imagem} "alt="imagem dos Pets de casa" />
      <ul>
          <li id="props"><span>Nome: ${i.nome}</span></li> 
          <li id="props">Idade: ${i.idade}</li>
          <li id="props">Alimentação: ${i.alimentacao}</li>
      </ul>
      </section>`
      }


}

ListaBichinhos (animais)

// semana 12 //-------------------------------------------------------

function buscarPet() {
  const input = document.getElementById("search-txt")
  // console.log(input.value)
  const petFiltrado = filtroPet(input)
  ListaBichinhos(petFiltrado)
}
function filtroPet(input) {
  const petFiltrado = animais.filter((item) => { return item.nome.toUpperCase() === input.value.toUpperCase() })
  if (petFiltrado.length >0) {
        return petFiltrado
  } else {
    alert('Pet não encontrado')
    return animais
  }
}
