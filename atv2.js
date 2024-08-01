

let btn = document.getElementById('btn').addEventListener('click', valorInput)



function valorInput(){
    let valor = Number(document.getElementById('input').value)
    let valor2 = Number(document.getElementById('input2').value)
    let res = document.getElementById('res')

    let soma = valor + valor2

    res.innerText = soma
    
}