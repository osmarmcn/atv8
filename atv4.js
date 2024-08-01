
function alterarImagem(){
    let img = document.getElementById('imagem')
    img.src = 'https://files.tecnoblog.net/wp-content/uploads/2022/09/stable-diffusion-imagem.jpg'
}


let alterar = document.getElementById('btn').addEventListener('click', alterarImagem)
