let header = document.querySelector(".header")
let input = document.querySelector(".input")
let listInput = document.getElementById("list-input")
let lista = document.querySelector(".lista")

input.focus()

window.addEventListener('scroll', () => {
    const scrollpos = window.scrollY
    console.log("Posición vertical del scroll:" + scrollpos);

    if (scrollpos >= 42) {
        header.style.height = "0";
        input.style.display = "none";
        listInput.style.display = 'flex'

    } else {
        header.style.height = "84px";
        input.style.display = "flex";
        listInput.style.display = 'none'
    }
    
})

input.addEventListener('focus', ()=>{
    input.style.width = "1000px"
})

input.addEventListener('blur', ()=>{
    input.style.width = "100px"
})

listInput.addEventListener('focus', ()=>{
    listInput.style.width = "1000px"
})

listInput.addEventListener('blur', ()=>{
    listInput.style.width = "100px"
})

