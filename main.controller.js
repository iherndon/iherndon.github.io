(function(){
	angular.module('Life')
		.controller('MainController', MainController);

	function MainController($interval, GameBoardFactory){
		var vm = this;
		vm.name = 'Ivan';
		vm.cellsArray = [];
		vm.isRunning = null;
		vm.isBoardEmpty = function(){
			for (var i = 0; i < vm.cellsArray.length; i++){
				if (vm.cellsArray[i].isAlive === true)
					return false;
			}
			return true;
		}
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
				var currentNumber = vm.numbersToCalculateSurroundingCells[i];
				var added = cell.position + currentNumber;
				var subtracted = cell.position - currentNumber;
				if(((cell.position % 40 === 0 && currentNumber !== 39) || (cell.position - 39) % 40 === 0 && (currentNumber === 39 || currentNumber === 40) || (cell.position - 39) % 40 !== 0 && cell.position % 40 !== 0) && added < 1600){
					array.push(vm.cellsArray[added]);	
				}
				if((cell.position % 40 === 0 && (currentNumber !== 41 && currentNumber !== 1) || ((cell.position-39) % 40 == 0 && (currentNumber !== 39)) || (cell.position % 40 !== 0 && (cell.position-39) % 40 !== 0)) && subtracted >= 0 ){
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
				if(cell.isAlive === true && (alive < 2 || alive > 3)) {
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
		vm.runGameOnInterval = function(){
				console.log('started');
				vm.isRunning = true;
				vm.intervals = $interval (function(){
					vm.iterator();
					vm.changeStatusAll();
				},125)
		}
		vm.stopGame = function (){
			vm.isRunning = false;
			$interval.cancel(vm.intervals);
			console.log('stopped');
		}
		vm.startingPositions = {
			'beacon': GameBoardFactory.setBoardBeacon,
			'gliderGun': GameBoardFactory.setBoardGliderGun,
			'pulsar': GameBoardFactory.setBoardPulsar,
			'cross': GameBoardFactory.setBoardCross,
			'perpendicular': GameBoardFactory.setBoardPerpendicular,
			'plusSquare': GameBoardFactory.setBoardPlusSquare,
			'plusSquareDiamond': GameBoardFactory.setBoardPlusSquareDiamond,
			'mirrorPerpendicular': GameBoardFactory.setBoardMirrorPerpendicular,
		}
		vm.getStartingPosition = function (name){
			for (var board in vm.startingPositions){
				if (name === board){
					vm.clearBoard();
					return vm.startingPositions[board](vm.cellsArray);
				}
			}
		}
		vm.clearBoard = function() {
			vm.cellsArray.forEach(function(cell){
				cell.isAlive = false;
			});
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
					return {'background': 'green'}
				} else {
					return {'background': 'none'}
				}
			}
		}
	}
})();