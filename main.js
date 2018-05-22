$(document).ready(function(){

$("button").on("click", function(e){
  e.preventDefault();
  // var start = parseFloat($("#start-station").val()),
  //     stop = parseFloat($("#stop-station").val()),
  var datalistStart = document.getElementById('#start-station').val();
      datalistStop = document.getElementById('#stop-station').val();
      startProb = 100-datalistStart,
      stopProb = 100-datalistStop,
      numRides = parseInt($("#rides").val()),
      percentToNum = parseInt((startProb*.01) + (stopProb * .01),
      answer = (percentToNum) * (numRides);
      $("#answer").find("span").text(answer)();
});
});