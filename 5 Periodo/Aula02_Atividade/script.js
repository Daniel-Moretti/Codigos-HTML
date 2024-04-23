function Notas(){
    let acertosMatematica = document.getElementById("acertos_matematica").value;
    let pesoMatematica = document.getElementById("peso_matematica").value;
    const notaMatematica = parseFloat(acertosMatematica) / parseFloat(pesoMatematica);

    document.getElementById("nota_matematica").value = notaMatematica;

    let acertosPortugues = document.getElementById("acertos_portugues").value;
    let pesoPortugues = document.getElementById("peso_portugues").value;
    const notaPortugues = parseFloat(acertosPortugues) / parseFloat(pesoPortugues);

    document.getElementById("nota_portugues").value = notaPortugues;

    let acertosHistoria = document.getElementById("acertos_historia").value;
    let pesoHistoria = document.getElementById("peso_historia").value;
    const notaHistoria = parseFloat(acertosHistoria) / parseFloat(pesoHistoria);

    document.getElementById("nota_historia").value = notaHistoria;

    let acertosGeografia = document.getElementById("acertos_geografia").value;
    let pesoGeografia = document.getElementById("peso_geografia").value;
    const notaGeografia = parseFloat(acertosGeografia) / parseFloat(pesoGeografia);

    document.getElementById("nota_geografia").value = notaGeografia;

    let acertosIngles = document.getElementById("acertos_ingles").value;
    let pesoIngles = document.getElementById("peso_ingles").value;
    const notaIngles = parseFloat(acertosIngles) / parseFloat(pesoIngles);

    document.getElementById("nota_ingles").value = notaIngles;

}

