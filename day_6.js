let iniciarLista = prompt("Deseja adicionar algum item à lista de compras? \n 1 - sim \n 2 - não \n 3 - excluir item da lista");
let categoria;
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
    iniciarLista = prompt("Deseja adicionar algum item à lista de compras? \n 1 - sim \n 2 - não \n 3 - excluir item da lista");
}

while (iniciarLista === "3") {
    alert(`Sua lista de compras atual é: \n Frutas: ${frutas.join(", ")} \n Laticínios: ${laticinios.join(", ")} \n Congelados: ${congelados.join(", ")} \n Doces: ${doces.join(", ")} \n Carnes: ${carnes.join(", ")}`);
    categoria = prompt("Escolha a categoria do seu item: \n 1 - frutas \n 2 - laticinios \n 3 - congelados \n 4 - doces \n 5 - carnes");
    item = prompt("Digite o item que deseja excluir da lista de compras: ");
    if (categoria === "1") {
        frutas.splice(frutas.indexOf(item), 1);
    } else if (categoria === "2") {
        laticinios.splice(laticinios.indexOf(item), 1);
    } else if (categoria === "3") {
        congelados.splice(congelados.indexOf(item), 1);
    } else if (categoria === "4") {
        doces.splice(doces.indexOf(item), 1);
    } else if (categoria === "5") {
        carnes.splice(carnes.indexOf(item), 1);
    }
    iniciarLista = prompt("Deseja adicionar algum item à lista de compras? \n 1 - sim \n 2 - não \n 3 - excluir item da lista");
}

alert(`Sua lista de compras final é: \n Frutas: ${frutas.join(", ")} \n Laticínios: ${laticinios.join(", ")} \n Congelados: ${congelados.join(", ")} \n Doces: ${doces.join(", ")} \n Carnes: ${carnes.join(", ")}`);