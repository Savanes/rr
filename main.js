let burger = document.getElementById('btn-burger-img')

document.getElementById('btn-burger').addEventListener("click", function(){
    document.getElementById("burger").classList.toggle('open')
    
    if(document.getElementById("burger").classList[1] === 'open'){
        burger.src = './images/close-burger-menu.svg'
    }else{
        burger.src = './images/burger-menu.svg'
    }

})