const _ = require('lodash');
const BillingCycle = require('../billingCycle/billingCycle');

//Mais uma função middlware
function getSummary(req,res) {
	BillingCycle.aggregate({ /*Pipeline(fluxo) de Agregação*/
		$project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} /*Somatório pra cada documento*/
	}, {
		$group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} /*Somatório de todos*/
	}, {
		$project: {_id: 0, credit: 1, debt: 1}
	}, function(error,result){
		if(error){
			res.status(500).json({errors: [error]})
		} else {
			res.json(_.defaults(result[0], {credit: 0, debt: 0})) /*Junção do result com outros dois =return objeto válido*/
		}
	})
}

module.exports = { getSummary };