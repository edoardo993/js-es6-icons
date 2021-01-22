// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona,
//   che è caratterizzata da: nome, prefisso, tipo e famiglia.    DONE
// - Utilizzando la funzione forEach e il template literal,
//   visualizzare in pagina tutte le icone con il proprio nome.      DONE

let prefix='fa';
let family='fas';
const icons=[
    {'name': 'cat', prefix, 'type': 'Animals', family},
    {'name': 'crow', prefix, 'type': 'Animals', family},
    {'name': 'dog', prefix, 'type': 'Animals', family},
    {'name': 'dove', prefix, 'type': 'Animals', family},
    {'name': 'dragon', prefix, 'type': 'Animals', family},
    {'name': 'carrot', prefix, 'type': 'Food', family},
    {'name': 'lemon', prefix, 'type': 'Food', family},
    {'name': 'pepper-hot', prefix, 'type': 'Food', family},
    {'name': 'apple-alt', prefix, 'type': 'Food', family},
    {'name': 'pizza-slice', prefix, 'type': 'Food', family},
    {'name': 'user-astronaut', prefix, 'type': 'Person', family},
    {'name': 'user-graduate', prefix, 'type': 'Person', family},
    {'name': 'user-ninja', prefix, 'type': 'Person', family},
    {'name': 'user-nurse', prefix, 'type': 'Person', family},
    {'name': 'user-secret', prefix, 'type': 'Person', family}
];
const fontContainer=document.getElementsByClassName('container-flex')[0];
// icons.forEach(element => {
//     fontContainer.innerHTML+=`
//     <div class="${element.name}">
//         <i class="${element.family} ${element.prefix}-${element.name}"></i>
//         <p>${element.name.toUpperCase()}</p>
//     </div>
//     `
// });

// Milestone 2:
// Definire un array di colori e associare ad ogni tipo di icona un colore.       DONE
// Visualizzare le icone di colore diverso in base al tipo.       DONE

const colors=['blue', 'orange', 'darkviolet'];
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
    <div class="${element.name} click">
        <i class="${element.family} ${element.prefix}-${element.name}" style="color:${element.color}"></i>
        <p>${element.name.toUpperCase()}</p>
    </div>
    `
});

// Milestone 3:
// Aggiungere una select per filtrare le icone in base al tipo.       DONE
// Popolare le options della select dinamicamente e, ogni volta che cambia
//    il valore selezionato, visualizzare le icone corrispondenti.        DONE

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
                <i class="${element.family} ${element.prefix}-${element.name}" style="color:${element.color}"></i>
                <p>${element.name.toUpperCase()}</p>
            </div>
            `
        }
        if(valueSelected==='all'){
            fontContainer.innerHTML+=`
            <div class="${element.name}">
                <i class="${element.family} ${element.prefix}-${element.name}" style="color:${element.color}"></i>
                <p>${element.name.toUpperCase()}</p>
            </div>
            `
        }
    })
});
// ----------------------- COMPLETED ------------------------


// EXTRA
$('.click').click(function(){
    if($(this).hasClass('show')){
        $(this).removeClass('show');
        $('.click').removeClass('hide');
        $('.caption').addClass('hide')
    }else{
        $(this).addClass('show');
        $('.click').addClass('hide');
        $(this).append('<p class="caption"></p>')
    }
})



// $('.click').click(function(){
//     if($(this).hasClass('show')){
//         $(this).removeClass('show');
//         $('.click').removeClass('opacity');
//         $('.caption').addClass('hide')
//     }else{
//         $(this).addClass('show');
//         $('.click').addClass('opacity');
//         $(this).append('<p class="caption"></p>')
//     }
// })