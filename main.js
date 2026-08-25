let senha ""
if (checkbox[0].checked){
    senha += letrasMaiusculas[
        Math.floor(Math.random()*letrasMaiusculas.lenght)
    ]
}
let senha ""
if (checkbox[1].checked){
    senha += letrasMinusculas[
        Math.floor(Math.random()*letrasMinusculas.lenght)
    ]
}
let senha ""
if (checkbox[2].checked){
    senha += simbolos[
        Math.floor(Math.random()*simbolos.lenght)
    ]
}