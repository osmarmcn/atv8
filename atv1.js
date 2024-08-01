

//    let valor = document.getElementById('input')

//    valor.addEventListener('input', function getValue(e){
//         console.log(e.target.value)
//    })


let btn = document.getElementById('btn').addEventListener('click', getValue)

function getValue(){
    let valor = document.getElementById('input').value
    console.log(valor)
}
