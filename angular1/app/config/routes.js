(function() {
angular.module('primeiraApp').config([
	'$stateProvider', /* os dois dentro de ui-router*/
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('dashboard', {
			url: "/dashboard",
			templateUrl: "dashboard/dashboard.html"
		}).state('billingCycle', {
			url: "/billingCycle?pages",
			templateUrl: "/billingCycle/tabs.html"
		})

		$urlRouterProvider.otherwise('/dashboard')
	}
])
})()

