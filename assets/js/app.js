const sobremi = document.getElementById("sobremi");
const pag2 = document.getElementById("pag2");
const regresar = document.getElementById("Regresar");

sobremi.addEventListener("click",()=>{
    page2.classlist.add("entrar");
})

regresar.addEventListener("click", ()=>{
    pag2.classList.remove("entrar");
});