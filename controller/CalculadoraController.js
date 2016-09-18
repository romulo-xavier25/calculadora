var app = angular.module('CalculadoraAnagularJS', []);

app.controller('CalculadoraController', function calculadora($scope) {
	
	$scope.operacaoSelecionada = null;
	$scope.resultado = 0;

	$scope.somar = function adicao(valor1, valor2) {
		//this.resultado = valor1 + valor2;
		var valorUm = parseInt(valor1);
		var valorDois = parseInt(valor2);
		this.resultado = valorUm + valorDois;
	}


});
