(function () {
	angular.module('primeiraApp').controller('BillingCycleCtrl', [
		'$http',
		BillingCycleController
	])

	function BillingCycleController($http) {
		const vm = this
		const url = 'http://localhost:3003/api/billingCycles'

		vm.create = function() {
			$http.post(url, vm.billingCycle).then(function(response) {
				vm.billingCycle = {}
				console.log('Sucesso!')
			})
		}
	}
})()