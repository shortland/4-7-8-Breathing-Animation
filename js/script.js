/*
* Ilan Kleiman
* script.js
# MM/DD/YY
*/

$(document).ready(function() {

	// because some browsers aren't great with calc() support in css **cough cough safari**
	$("#breather").css({"left" : ($(window).width()/2 - 5), "top" : ($(window).height()/2 - 5)});
	$("#maxBreath").css({"left" : ($(window).width()/2 - 104.5), "top" : ($(window).height()/2 - 104.5)});

	var breathIn = function() {
		countChanger("inhaleCount", {"limit":4, "counter":4});
		$("#inhale").animate({"color" : "#8db3ef"}, 400);
		$("#breather").animate({"width" : "200px", "height" : "200px", "top" : "-=100px", "left" : "-=100px"}, 4000, function() {
			$("#inhale").animate({"color" : "#000000"}, 400);
			$("#and").animate({"color" : "#8db3ef"}, 400, function() {
				$("#and").animate({"color" : "#000000"}, 400);
				$("#hold").animate({"color" : "#8db3ef"}, 400);
			});
			countChanger("holdCount", {"limit":7, "counter":7});
			setTimeout(function() {
				breathOut();
			}, 7000);
		});
	}

	var breathOut = function() {
		countChanger("exhaleCount", {"limit":8, "counter":8});
		$("#hold").animate({"color" : "#000000"}, 400);
		$("#exhale").animate({"color" : "#8db3ef"}, 400);
		$("#breather").animate({"width" : "10px", "height" : "10px", "top" : "+=100px", "left" : "+=100px"}, 8000, function() {
			$("#exhale").animate({"color" : "#000000"}, 400);
			breathIn();
		});
	}

	var countChanger = function(id, object) {
		if(object.counter == -1) {
			$("#" + id).html(object.limit);
			return;
		}

		$("#" + id).html(object.counter);
		setTimeout(function() {
			countChanger(id, {"limit":object.limit, "counter":object.counter-=1});
		}, 1000);
	}

	breathIn();
});
