


function getNumber(){
    let mn = document.getElementById("min").value
    let mx = document.getElementById("max").value
    let min = parseInt(mn)
    let max = parseInt(mx)
    let random =  Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log(random)
    return random

    }
