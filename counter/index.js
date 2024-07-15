const countDown = document.querySelector(".numbercount")
const buttonIncrease = document.getElementById ("increaseBtn")
const buttonReset= document. getElementById ("resetBtn")
const buttonDecrease = document.getElementById ("decreaseBtn")

// countDown.innerHTML = 0

//the first goal is to create a counter. Using the forEach ()
let x = 0 


function resfunction(){
    let x = 0 
    countDown.textContent = x 
    location.reload()
}


function incfunction(){
    x++; 
    countDown.textContent = x; 

    if (x > 0)countDown.style.color = "green"; 
    
}


function decfunction() {
    x-- ; 
    countDown.textContent = x; 
    if (x<0)countDown.style.color = "red"; 
}




if(x === 0)countDown.style.color = "black"; 



//using classList


