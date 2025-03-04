let iniciarLista = prompt("Deseja adicionar algum item à lista de compras? \n 1 - sim \n 2 - não");
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let carnes = [];


while (iniciarLista === "1") {
    categoria = prompt("Escolha a categoria do seu item: \n 1 - frutas \n 2 - laticinios \n 3 - congelados \n 4 - doces \n 5 - carnes");
    item = prompt("Digite o item que deseja adicionar à lista de compras: ");
    if (categoria === "1") {
        frutas.push(item);
    } else if (categoria === "2") {
        laticinios.push(item);
    } else if (categoria === "3") {
        congelados.push(item);
    } else if (categoria === "4") {
        doces.push(item);
    } else if (categoria === "5") {
        carnes.push(item);
    }
    iniciarLista = prompt("Deseja adicionar mais algum item à lista de compras? \n 1 - sim \n 2 - não");
}

alert(`Sua lista de compras é: \n Frutas: ${frutas.join(", ")} \n Laticínios: ${laticinios.join(", ")} \n Congelados: ${congelados.join(", ")} \n Doces: ${doces.join(", ")} \n Carnes: ${carnes.join(", ")}`);