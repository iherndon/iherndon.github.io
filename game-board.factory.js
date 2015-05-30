(function(){
	angular.module('Life')
		.factory('GameBoardFactory', GameBoardFactory);

		function GameBoardFactory () {
			return {
				setBoardBeacon: function(array) {
					array[416].isAlive = true;
					array[417].isAlive = true;
					array[456].isAlive = true;
					array[499].isAlive = true;
					array[539].isAlive = true;
					array[538].isAlive = true;	

}
			}
		}
})();