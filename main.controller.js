(function(){
	angular.module('Life')
		.controller('MainController', MainController);

	function MainController($timeout, $interval){
		var vm = this;
		vm.name = 'Ivan';
		vm.cellsArray = [];
		vm.createCells = function (){
			for (var i = 0; i < 1600; i ++)
				vm.cellsArray.push({position: i});
		}
		vm.createCells();
		function cell (position, isAlive, nextIteration){
			this.position = position;
			this.isAlive = isAlive;
			this.nextIteration = nextIteration;
			this.changeStatus = function(){
				return this.isAlive = this.nextIteration;
			}
			this.checkStatus = function(){
				if(this.isAlive){
					return {background: red}
				} else {
					return {background: none}
				}
			}
		}
	}
})();