angular
	.module('snapWeb')
	.factory('snapFactory', function(){
		var snapData = [
		  {
		    "id": 1,
		    "name": "Shaun Tan",
		    "position": "CEO",
		    "description": "ADHD Dreamer and Doer",
		    "image":"team1"
		  },
		   {
		    "id": 2,
		    "name": "Chia Chien Wei",
		    "position": "COO",
		    "description": "Adventurer and Deep Thinker",
		    "image":"team2"
		  },

		   {
		    "id": 3,
		    "name": "Wilson Neo",
		    "position": "Advisor",
		    "description": "Strategic Thinker",
		    "image":"team3"
		  }
		];

		function getSnaps(){
			return snapData;
		}
		return{
			getSnaps: getSnaps
		}

	});

