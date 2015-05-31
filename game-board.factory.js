(function(){
	angular.module('Life')
		.factory('GameBoardFactory', GameBoardFactory);

		function GameBoardFactory () {
			return {
				setBoardPerpendicular: function(array){
					array[659].isAlive = true;
					array[699].isAlive = true;
					array[739].isAlive = true;
					array[779].isAlive = true;
					array[778].isAlive = true;
					array[780].isAlive = true;	
				},
				setBoardBeacon: function(array) {
					array[416].isAlive = true;
					array[417].isAlive = true;
					array[456].isAlive = true;
					array[499].isAlive = true;
					array[539].isAlive = true;
					array[538].isAlive = true;	
				},
				setBoardToad: function (array){
					array[70].isAlive = true;
					array[71].isAlive = true;
					array[72].isAlive = true;
					array[89].isAlive = true;
					array[90].isAlive = true;
					array[91].isAlive = true;
				},
				setBoardGliderGun: function (array){
					array[201].isAlive = true;
					array[241].isAlive = true;
					array[202].isAlive = true;
					array[242].isAlive = true;

					array[133].isAlive = true;
					array[134].isAlive = true;
					array[176].isAlive = true;
					array[217].isAlive = true;
					array[255].isAlive = true;
					array[257].isAlive = true;
					array[258].isAlive = true;
					array[297].isAlive = true;
					array[172].isAlive = true;
					array[211].isAlive = true;
					array[251].isAlive = true;
					array[291].isAlive = true;
					array[332].isAlive = true;
					array[373].isAlive = true;
					array[374].isAlive = true;
					array[336].isAlive = true;

					array[221].isAlive = true;
					array[222].isAlive = true;
					array[181].isAlive = true;
					array[182].isAlive = true;
					array[141].isAlive = true;
					array[142].isAlive = true;
					array[103].isAlive = true;
					array[105].isAlive = true;
					array[65].isAlive = true;
					array[263].isAlive = true;
					array[265].isAlive = true;
					array[305].isAlive = true;

					array[155].isAlive = true;
					array[156].isAlive = true;
					array[195].isAlive = true;
					array[196].isAlive = true;
				},
				setBoardPulsar: function (array){
					array[291].isAlive = true;
					array[292].isAlive = true;
					array[293].isAlive = true;
					array[374].isAlive = true;
					array[414].isAlive = true;
					array[454].isAlive = true;
					array[493].isAlive = true;
					array[492].isAlive = true;
					array[491].isAlive = true;
					array[369].isAlive = true;
					array[409].isAlive = true;
					array[449].isAlive = true;
					array[298].isAlive = true;
					array[299].isAlive = true;
					array[297].isAlive = true;
					array[381].isAlive = true;
					array[421].isAlive = true;
					array[461].isAlive = true;
					array[497].isAlive = true;
					array[498].isAlive = true;
					array[499].isAlive = true;
					array[376].isAlive = true;
					array[416].isAlive = true;
					array[456].isAlive = true;
					array[571].isAlive = true;
					array[572].isAlive = true;
					array[573].isAlive = true;
					array[614].isAlive = true;
					array[654].isAlive = true;
					array[694].isAlive = true;
					array[773].isAlive = true;
					array[772].isAlive = true;
					array[771].isAlive = true;
					array[609].isAlive = true;
					array[649].isAlive = true;	
					array[689].isAlive = true;
					array[577].isAlive = true;
					array[578].isAlive = true;
					array[579].isAlive = true;
					array[621].isAlive = true;
					array[661].isAlive = true;
					array[701].isAlive = true;
					array[777].isAlive = true;
					array[779].isAlive = true;
					array[778].isAlive = true;
					array[616].isAlive = true;
					array[656].isAlive = true;
					array[696].isAlive = true;
				},
				setBoardCross: function (array){
					array[95].isAlive = true;
					array[135].isAlive = true;
					array[175].isAlive = true;
					array[215].isAlive = true;
					array[255].isAlive = true;

					array[415].isAlive = true;
					array[455].isAlive = true;
					array[495].isAlive = true;
					array[535].isAlive = true;
					array[575].isAlive = true;

					
					array[332].isAlive = true;
					array[331].isAlive = true;
					array[330].isAlive = true;
					array[329].isAlive = true;
					array[328].isAlive = true;
					array[327].isAlive = true;
					array[326].isAlive = true;
					array[325].isAlive = true;
					array[324].isAlive = true;
					array[323].isAlive = true;

					array[338].isAlive = true;
					array[339].isAlive = true;
					array[340].isAlive = true;
					array[341].isAlive = true;
					array[342].isAlive = true;
					array[343].isAlive = true;
					array[344].isAlive = true;
					array[345].isAlive = true;
					array[346].isAlive = true;
					array[347].isAlive = true;

					array[725].isAlive = true;
					array[727].isAlive = true;
					array[724].isAlive = true;
					array[723].isAlive = true;
					array[223].isAlive = true;
					array[224].isAlive = true;
					array[225].isAlive = true;
					array[227].isAlive = true;

					array[121].isAlive = true;
					array[122].isAlive = true;
					array[123].isAlive = true;
					array[201].isAlive = true;
					array[202].isAlive = true;
					array[203].isAlive = true;
				}, 
				setBoardCross: function(array){
					array[460].isAlive = true;
					array[180].isAlive = true;
					array[220].isAlive = true;
					array[260].isAlive = true;
					array[300].isAlive = true;
					array[340].isAlive = true;
					array[380].isAlive = true;
					array[420].isAlive = true;

					array[900].isAlive = true;
					array[620].isAlive = true;
					array[660].isAlive = true;
					array[700].isAlive = true;
					array[740].isAlive = true;
					array[780].isAlive = true;
					array[820].isAlive = true;
					array[860].isAlive = true;

					array[539].isAlive = true;
					array[538].isAlive = true;
					array[537].isAlive = true;
					array[536].isAlive = true;
					array[535].isAlive = true;
					array[534].isAlive = true;
					array[533].isAlive = true;
					array[532].isAlive = true;

					array[541].isAlive = true;
					array[542].isAlive = true;
					array[543].isAlive = true;
					array[544].isAlive = true;
					array[545].isAlive = true;
					array[546].isAlive = true;
					array[547].isAlive = true;
					array[548].isAlive = true;
				}

			}
		}
})();