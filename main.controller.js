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
		vm.numbersToCalculateSurroundingCells = [1,40,39, 41];
		vm.createCells = function (){
			for (var i = 0; i < 1600; i ++)
				vm.cellsArray.push(new Cell(i, false, false));
		}
		vm.getCellsAroundCheckedCell = function(cell){
			var array=[];
			
			for (var i = 0; i < vm.numbersToCalculateSurroundingCells.length; i++){
				var added = cell.position + vm.numbersToCalculateSurroundingCells[i];
				var subtracted = cell.position - vm.numbersToCalculateSurroundingCells[i];
				if(added >= 0 && added < 1600 ){
					array.push(vm.cellsArray[added]);	
				}
				if(subtracted >= 0 && subtracted < 1600 ){
					array.push(vm.cellsArray[subtracted]);
				}
			}
			return array;
		}
		vm.iterator = function(){
			vm.cellsArray.forEach(function(cell){
				var alive = 0;
				var tempArray = vm.getCellsAroundCheckedCell(cell);
				tempArray.forEach(function(item){
					if (item.isAlive === true)
						alive ++;
				});
				if(cell.isAlive === true && (alive<2 || alive > 3)) {
					cell.nextIteration = false;
				} else if (cell.isAlive === false && alive === 3) {
					cell.nextIteration = true;
				} else if (cell.isAlive === false){
					cell.nextIteration = false;
				} else {
					cell.nextIteration = true;
				}
			})
		}
		vm.changeStatusAll = function(){
			vm.cellsArray.forEach(function(cell){
				cell.changeStatus();
			})
		}
		vm.runGameOnInterval = function(repititions){
			console.log('started');
			var x = 0;
			var intervals = $interval (function(){
				vm.iterator();
				vm.changeStatusAll();
				x++;

				if (x === repititions){
					$interval.cancel(intervals)
					console.log('stopped');
				}
			}, 150)
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