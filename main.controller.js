(function(){
	angular.module('Life')
		.controller('MainController', MainController);

	function MainController($timeout, $interval){
		var vm = this;
		vm.name = 'Ivan';
		vm.cellsArray = [];
		vm.aliveToggle = function(cell){
			cell.isAlive = !cell.isAlive;
		}
		vm.numbersToCalculateSurroundCells = [1,40,39, 41];
		vm.createCells = function (){
			for (var i = 0; i < 1600; i ++)
				vm.cellsArray.push(new Cell(i, false, false));
		}
		vm.getCellsAroundCheckedCell = function(cell){
			var array=[];
			for (var i = 0; i < vm.numbersToCalculateSurroundCells; i++){

				if(Number(cell.position) + vm.numbersToCalculateSurroundCells[i] !== undefined){
					array.push(Number(cell.position) + vm.numbersToCalculateSurroundCells[i]);
				}
				if(Number(cell.position) - vm.numbersToCalculateSurroundCells[i] !== undefined){
					array.push(Number(cell.position) - vm.numbersToCalculateSurroundCells[i]);
				}
			}
			return array;
		}
		vm.createCells();


		function Cell (position, isAlive, nextIteration){
			this.position = position;
			this.isAlive = isAlive;
			this.nextIteration = nextIteration;
			this.changeStatus = function(){
				return this.isAlive = this.nextIteration;
			}
			this.checkStatus = function(){
				if(this.isAlive){
					return {'background': 'red'}
				} else {
					return {'background': 'none'}
				}
			}
		}
	}
})();