var number01 = parseInt(prompt("Digite o primeiro valor:"));
var number02 = parseInt(prompt("Digite o segundo valor:"));
var operation = prompt("Digite a operação desejada: + = adição, - = subtração, * = multiplicação e  / = divisão");
var result = "";

if (operation === "+") {
	result = number01 + number02;
}else if (operation === "-") {
	result = number01 - number02;
}else if (operation === "*") {
	result = number01 * number02;
}else if (operation === "/") {
	result = number01 / number02;
}

if (result === "") {
	document.body.append("Operador não identificado")
}else if (result === Infinity) {
	document.body.append("Não é possivel dividir com o número zero!")
}else if (result.toString() === "NaN") {
	document.body.append("Operação inválida!")
}else {
	document.body.append("O resultado é " + result)
}
