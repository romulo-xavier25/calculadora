var app = angular.module('CalculadoraAnagularJS', []);

app.controller('CalculadoraController', function calculadora($scope) {
	
	$scope.operacaoSelecionada = null;
	$scope.resultado = 0;
	$scope.valorUm;
	$scope.valorDois;

	$scope.calcular = function calculadora(valor1, valor2) {
		valorUm = parseInt(valor1);
		valorDois = parseInt(valor2);

		if ($scope.operacaoSelecionada == "+"){
			this.resultado = valorUm + valorDois;
		}
		if ($scope.operacaoSelecionada == "-"){
			this.resultado = valorUm - valorDois;
		}
		if ($scope.operacaoSelecionada == "/"){
			if (valorDois <= 0) {
				console.log("operacao invalida!");
				this.resultado = "operacao invalida!"
			}else{
				this.resultado = valorUm / valorDois;
			}
		}
		if ($scope.operacaoSelecionada == "*"){
			this.resultado = valorUm * valorDois;
		}

	}

	$scope.somar = function somando(){
		$scope.operacaoSelecionada = "+";
	}

	$scope.subtrair = function subtraindo(){
		$scope.operacaoSelecionada = "-";
	}

	$scope.multiplicar = function multiplicando(){
		$scope.operacaoSelecionada = "*";
	}

	$scope.dividir = function dividindo(){
		$scope.operacaoSelecionada = "/";
	}


});
