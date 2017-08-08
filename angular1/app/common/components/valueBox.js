(function() {
angular.module('primeiraApp').component('valueBox', {
	bindings: { /*entradas*/
		grid: '@',
		colorClass: '@',
		value: '@',
		text: '@',
		iconClass: '@',
	},
	controller: [ /*controle*/
		'gridSystem',
		function(gridSystem) { /*Só funciona quando os bindings estiverem inicializados*/
			this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)			
		}
	],
	template: /*Template*/ ` 
	<div class="{{ $ctrl.gridClasses }}">
		<div class="small-box {{ $ctrl.colorClass }}">
			<div class="inner">
				<h3>{{ $ctrl.value }}</h3>
				<p> {{ $ctrl.text }} </p>
			</div>
			<div class="icon">
				<i class="fa {{ $ctrl.iconClass }}"></i>
			</div>
		</div>
	</div>
	`
})

})()

