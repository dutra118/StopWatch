const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')
const reiniciar = document.getElementById('reiniciar')
const contador = document.getElementById('texto')

intervalo = ''
let s = h = min = 0

iniciar.addEventListener('click', comecar)
parar.addEventListener('click', terminar)
reiniciar.addEventListener('click', zera)

function comecar(){
    tempo()
    intervalo = setInterval((tempo),1000)
    parar.style.display = 'block'
    iniciar.style.display = 'none'
    reiniciar.style.display = 'none'
}

function terminar(){
    clearInterval(intervalo)
    iniciar.style.display = 'block'
    parar.style.display = 'none'
    iniciar.style.left = '-10px'
    reiniciar.style.display = 'block'
}

function zera (){
    reiniciar.style.display = 'none'
    iniciar.style.left = '25%'
    contador.innerText = '00:00:00'
    s = 0
    min = 0
    h = 0
}

function tempo(){
    s++
    if(s>60){
        min++
        s=0
        if(min>60){
            h++
            min=0
        }
    }
    contador.innerText = doiszeros(h)+':'+doiszeros(min)+':'+doiszeros(s)
}

function doiszeros(zero){
    if(zero<10){
        return '0'+zero
    }
    else{
        return zero
    }
}