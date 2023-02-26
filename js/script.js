
let counterCase = document.querySelectorAll('.counter')
console.log(counterCase)

let getNum = Array.from(counterCase)

getNum.map(item =>{
    console.log(item.dataset.number)

    let counterStart = 0;

    function counterUp(){
        counterStart ++;
        item.innerHTML = `${counterStart} +`

        if(counterStart == item.dataset.number){
            clearInterval(stop)
        }

    }

   let stop = setInterval(()=>{
        counterUp()
    },13)
    
})