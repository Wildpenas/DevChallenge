import contador from "./contador.js";

let btn = document.getElementById('btn')
btn.addEventListener('click', adicionar);

let data = document.getElementById("txtdata")


function open(){
    document.querySelector('.modal').classList.add('active')
    
};



function adicionar(){
    if(data.value==''){

        alert('insirá uma data valida')
        
        
        }else{

    open()
    

    
    
    let quebrado = data.value.split("-");

    if(quebrado[1] == 1){quebrado[1]='january'; console.log(quebrado[1])}
    if(quebrado[1] == 2){quebrado[1]='february'; console.log(quebrado[1])}
    if(quebrado[1] == 3){quebrado[1]='march'; console.log(quebrado[1])}
    if(quebrado[1] == 4){quebrado[1]='april'; console.log(quebrado[1])}
    if(quebrado[1] == 5){quebrado[1]='may'; console.log(quebrado[1])}
    if(quebrado[1] == 6){quebrado[1]='june'; console.log(quebrado[1])}
    if(quebrado[1] == 7){quebrado[1]='july'; console.log(quebrado[1])}
    if(quebrado[1] == 8){quebrado[1]='august'; console.log(quebrado[1])}
    if(quebrado[1] == 9){quebrado[1]='september'; console.log(quebrado[1])}
    if(quebrado[1] == 10){quebrado[1]='october'; console.log(quebrado[1])}
    if(quebrado[1] == 11){quebrado[1]='november'; console.log(quebrado[1])}
    if(quebrado[12] == 12){quebrado[1]='december'; console.log(quebrado[1])}

    let quebrado1 = [parseInt(quebrado[2]),quebrado[1],parseInt(quebrado[0])]
    

    
    const tempo = new contador(`${quebrado1[0]} ${quebrado1[1]} ${quebrado1[2]}`);
    
    const tempos = document.querySelectorAll(".p4");
    function mostrarTempo(){
       
        tempos.forEach((i, index)=>{
            
            i.innerHTML = tempo.total[index];
            
        })
    } 
    
    
    mostrarTempo();
    setInterval(mostrarTempo, 1000);
}
}
