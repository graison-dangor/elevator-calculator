$(document).ready(function () {

	$("button").on("click", function (e) {
		e.preventDefault();
		// var start = parseFloat($("#start-station").val()),
		//     stop = parseFloat($("#stop-station").val()),
		var datalistStart = parseFloat($('[list="start_station"]').val()),
			datalistStop = parseFloat($('[list="end_station"]').val()),
			startProb = 100 - datalistStart,
			stopProb = 100 - datalistStop,
			numRides = parseInt($("#rides").val()),
			percentToNum = (startProb * .01) + (stopProb * .01),
			answer = (percentToNum) * (numRides);

		// console.log("datalistStart", datalistStart);
		// console.log("datalistStop", datalistStop);
		// console.log("startProb", startProb);
		// console.log("stopProb", stopProb);
		// console.log("numRides", numRides);
		// console.log("percentToNum", percentToNum);
		// console.log("answer", answer);

		$("#answer").find("span").text(answer);
	});
});
