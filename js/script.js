
let countText = document.getElementById('counter');

let numStor = Number(countText.dataset.num)  ;

console.log(numStor)

let runin = 0;
function autoCount(){
    runin ++;
   
    countText.innerHTML =  `${runin} %`
    if(runin === numStor) {
        clearInterval(stop)
    }
}




let stop = setInterval(()=>{
    autoCount()
},20)

