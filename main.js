// Preventing the JavaScript from running before the HTML does and thus seeing nothing to fire on
$(document).ready(function(){

  // When a button is clicked, fire this function
$("button").on("click", function(e){
  e.preventDefault();
  // With these variables
  var start = parseFloat($("#start").val()),
      stop = parseFloat($("#stop").val()),
      // the values (stored in the HTML <option> elements) are the percentage of time that the elevators are running; subtracting them from 100 gives us the time that they are not running
      startProb = 100-start,
      stopProb = 100-stop,
      numRides = parseInt($("#rides").val()),
      // I found the math online. To get probability that one or another event will happen, you find the combined probability, aka the intersection, and subtract it from the  sum of both probabilities. The answer is called the union*, so I'm calling this variable probUnion.
      probUnion = parseInt((startProb*.01) + (stopProb * .01) - ((startProb*.01) * (stopProb * .01))),
      // The answer is the probability of the union times the weekly number of rides the user inputs into the table.
      answer = probUnion * numRides;

      $("#answer").find("span").text(answer);

});
});

// * Link to math reference: <https://www.quora.com/If-there-are-two-independent-events-that-could-occur-A-with-a-chance-of-20-and-B-with-a-chance-of-60-what-is-the-probability-that-at-least-one-of-these-events-will-occur-Explain-how-you-calculated-the-answer>
