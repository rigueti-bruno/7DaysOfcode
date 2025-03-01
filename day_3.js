let escolha = prompt("Qual área você quer seguir? \ para Font-end escolha 1 \ para Back-end escolha 2");
let escolha2;
let continua;

if (escolha == 1) {
    escolha2 = prompt("Qual Tecnologia você quer aprender? \ para React escolha 1 \ para Vue escolha 2");
    continua = prompt("Deseja se aprofundar nessa área ou se tornar FullStack? \ para Continuar na área escolha 5 \ para FullStack escolha 6");}
    else{
    escolha2 = prompt("Qual Tecnologia você quer aprender? \ para C# escolha 3 \ para Java escolha 4");
    continua = prompt("Deseja se aprofundar nessa área ou se tornar FullStack? \ para Continuar na área escolha 72 \ para FullStack escolha 6");
   }

let area = escolha == 1 ? "Front-end" : "Back-end";
let tecnologia;
if (escolha2 == 1) {
    tecnologia = "React";
} else if (escolha2 == 2) {
    tecnologia = "Vue";
} else if (escolha2 == 3) {
    tecnologia = "C#";
} else {
    tecnologia = "Java";
}

let continuidade;
if (continua == 5) {
    continuidade = "como Front-end";
} else if (continua == 6) {
    continuidade = "como FullStack";
} else {
    continuidade = "como Back-end";
}

alert(`Você escolheu a área de ${area} e deseja aprender ${tecnologia} e vai continuar se desenvolvendo ${continuidade}`);

let outras = [];
let tec;
let encerrar = 1;

while (encerrar == 1) {
    tec = prompt("Qual outra tecnologia você quer aprender?");
    outras.push(tec);
    encerrar = prompt("Tem mais alguma tecnologia que deseja aprender? \ Sim - 1 \ Não - 2");
}

alert(`Essas são todas as tecnologias que você quer aprender: ${tecnologia}, ${outras.join(", ")}.`);