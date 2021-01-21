// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona,
//   che è caratterizzata da: nome, prefisso, tipo e famiglia.    DONE
// - Utilizzando la funzione forEach e il template literal,
//   visualizzare in pagina tutte le icone con il proprio nome.      DONE

const icons=[
    {'name': 'cat', 'prefix': 'fa', 'type': 'Animals', 'family': 'fas'},
    {'name': 'crow', 'prefix': 'fa', 'type': 'Animals', 'family': 'fas'},
    {'name': 'dog', 'prefix': 'fa', 'type': 'Animals', 'family': 'fas'},
    {'name': 'dove', 'prefix': 'fa', 'type': 'Animals', 'family': 'fas'},
    {'name': 'dragon', 'prefix': 'fa', 'type': 'Animals', 'family': 'fas'},
    {'name': 'carrot', 'prefix': 'fa', 'type': 'Food', 'family': 'fas'},
    {'name': 'lemon', 'prefix': 'fa', 'type': 'Food', 'family': 'fas'},
    {'name': 'pepper-hot', 'prefix': 'fa', 'type': 'Food', 'family': 'fas'},
    {'name': 'apple-alt', 'prefix': 'fa', 'type': 'Food', 'family': 'fas'},
    {'name': 'pizza-slice', 'prefix': 'fa', 'type': 'Food', 'family': 'fas'},
    {'name': 'user-astronaut', 'prefix': 'fa', 'type': 'Person', 'family': 'fas'},
    {'name': 'user-graduate', 'prefix': 'fa', 'type': 'Person', 'family': 'fas'},
    {'name': 'user-ninja', 'prefix': 'fa', 'type': 'Person', 'family': 'fas'},
    {'name': 'user-nurse', 'prefix': 'fa', 'type': 'Person', 'family': 'fas'},
    {'name': 'user-secret', 'prefix': 'fa', 'type': 'Person', 'family': 'fas'}
];
const fontContainer=document.getElementsByClassName('container-flex')[0];
// icons.forEach(element => {
//     fontContainer.innerHTML+=`
//     <div class="${element.name}">
//         <i class="${element.family} ${element.prefix}-${element.name}" style="margin-bottom:8px"></i>
//         <p>${element.name.toUpperCase()}</p>
//     </div>
//     `
// });

// Milestone 2:
// Definire un array di colori e associare ad ogni tipo di icona un colore.       DONE
// Visualizzare le icone di colore diverso in base al tipo.       DONE

const colors=['blue', 'orange', 'violet'];
const iconsTypes=[];
const fasContainer=document.getElementsByClassName('fas');
icons.forEach(element=>{
    if(!iconsTypes.includes(element.type)){
        iconsTypes.push(element.type)
    }
});
icons.forEach(element=>{
    const indexType=iconsTypes.indexOf(element.type);
    if(indexType!==-1){
        element.color=colors[indexType]
    }
});
icons.forEach(element => {
    fontContainer.innerHTML+=`
    <div class="${element.name}">
        <i class="${element.family} ${element.prefix}-${element.name}" style="margin-bottom:8px; color:${element.color}"></i>
        <p>${element.name.toUpperCase()}</p>
    </div>
    `
});

// Milestone 3:
// Aggiungere una select per filtrare le icone in base al tipo.       DONE
// Popolare le options della select dinamicamente e, ogni volta che cambia
//    il valore selezionato, visualizzare le icone corrispondenti.        DO

const choiceList=document.getElementById('type-icons-choice');
iconsTypes.forEach((element) => {
    choiceList.innerHTML+=`
      <option value="${element}">${element}</option>
    `
});
$('#type-icons-choice').change(function() {
    let valueSelected = $(this).val();
    fontContainer.innerHTML='';
    icons.forEach(element => {
        if(valueSelected===element.type){
            fontContainer.innerHTML+=`
            <div class="${element.name}">
                <i class="${element.family} ${element.prefix}-${element.name}" style="margin-bottom:8px; color:${element.color}"></i>
                <p>${element.name.toUpperCase()}</p>
            </div>
            `
        }
    });
})