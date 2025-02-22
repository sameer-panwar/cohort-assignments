function getUserData(i){
    fetch("https://fakerapi.it/api/v1/persons")
        .then((response)=>response.json()
        .then((data)=>{
            console.log(data.data[i]);
            document.getElementById('display').innerText=data.data[i];
        })
        ) 
}


const renderButtons = document.getElementById('buttons');
let ArrayOfButton=[];

for(let i=1; i<=10; i++){
    let renderButtonsHTML=`<button onclick="getUserData(i)">${i}</button>`;
    ArrayOfButton.push(renderButtonsHTML);
    renderButtons.innerHTML=ArrayOfButton;
}