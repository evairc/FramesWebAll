(function() {
	angular.module('primeiraApp').controller('DashboardCtrl', [
	/*Dependência*/
	'$http',
	DashboardController
	])

	function DashboardController($http){
	/*Requisição http para a api (backend) pra obter o sumario*/
		const vm = this
		vm.getSummary = function() {
			const url = 'http://localhost:3003/api/billingSummary'
			/*Service do angular- http*/ /*receber um obj, nesse caso o atributo: crédito e débito(extrair)*/
			$http.get(url).then(function(response) {
				const {credit = 0, debt = 0} = response.data /*dentro de data tem o objeto credit e debt*/
				vm.credit = credit
				vm.debt = debt
				vm.total = credit - debt
			})
		}

		vm.getSummary()

	}

})()
