// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona,
//   che è caratterizzata da: nome, prefisso, tipo e famiglia.    DONE
// - Utilizzando la funzione forEach e il template literal,
//   visualizzare in pagina tutte le icone con il proprio nome.      DONE

const icons=[
    {'name': 'cat', 'prefix': 'fa-', 'type': 'animals', 'family': 'fas'},
    {'name': 'crow', 'prefix': 'fa-', 'type': 'animals', 'family': 'fas'},
    {'name': 'dog', 'prefix': 'fa-', 'type': 'animals', 'family': 'fas'},
    {'name': 'dove', 'prefix': 'fa-', 'type': 'animals', 'family': 'fas'},
    {'name': 'dragon', 'prefix': 'fa-', 'type': 'animals', 'family': 'fas'},
    {'name': 'carrot', 'prefix': 'fa-', 'type': 'food', 'family': 'fas'},
    {'name': 'lemon', 'prefix': 'fa-', 'type': 'food', 'family': 'fas'},
    {'name': 'pepper-hot', 'prefix': 'fa-', 'type': 'food', 'family': 'fas'},
    {'name': 'apple-alt', 'prefix': 'fa-', 'type': 'food', 'family': 'fas'},
    {'name': 'user-astronaut', 'prefix': 'fa-', 'type': 'person', 'family': 'fas'},
    {'name': 'user-graduate', 'prefix': 'fa-', 'type': 'person', 'family': 'fas'},
    {'name': 'user-ninja', 'prefix': 'fa-', 'type': 'person', 'family': 'fas'},
    {'name': 'user-secret', 'prefix': 'fa-', 'type': 'person', 'family': 'fas'}
];
const totalContainer=document.getElementsByClassName('container-flex')[0];
icons.forEach(element => {
    totalContainer.innerHTML+=`
    <div class="${element.name}">
        <i class="${element.family} ${element.prefix}${element.name}" style="margin-bottom:8px"></i>
        <p>${element.name}</p>
    </div>
    `
});

// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

const colors=['blue', 'orange', 'violet'];
icons.forEach(element=>{
    if(element.type==='animals'){
        element.color=colors[0]
    }else if(element.type==='food'){
        element.color=colors[1]
    }else{
        element.color=colors[2]
    }
});
// const blueIcons=icons.filter((element=>{
//     return element.family==='animals'
// }));
// const orangeIcons=icons.filter((element=>{
//     return element.family==='food'
// }));
// const violetIcons=icons.filter((element=>{
//     return element.family==='person'
// }));
// blueIcons.forEach((element)=>{
//     const {color}=element;
    
// })

// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia
//   il valore selezionato, visualizzare le icone corrispondenti.