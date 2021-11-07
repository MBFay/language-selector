$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();
    const favAnimal = $(":radio[name=fav-animal]:checked").data("language");
    const favColor = $(":radio[name=fav-color]:checked").data("language");
    const favBeachWalkLength = $(":radio[name=fav-beach-walk-length]:checked").data("language");
    const favLocation = $(":radio[name=fav-location]:checked").data("language");
    const favBeverage = $(":radio[name=fav-beverage]:checked").data("language");

    const favArray = [favAnimal, favColor, favBeachWalkLength, favLocation, favBeverage];

    let rubyScore = 0;
    let javascriptScore = 0;
    let pythonScore = 0;

    $(".programming-language").hide();

    if (favAnimal === undefined || favColor === undefined || favBeachWalkLength === undefined || favLocation === undefined || favBeverage === undefined) {
      alert("Please fill out the full form!");
    } else {
      favArray.forEach(function(choice) {
        if (choice === "javascript") {
          javascriptScore += 1;
        } else if (choice === "ruby") {
          rubyScore += 1;
        } else if (choice === "python") {
          pythonScore += 1;
        }
      });
  
      if (javascriptScore >= rubyScore && javascriptScore >= pythonScore) {
        $("#javascript").fadeToggle();
      } else if (rubyScore >= javascriptScore && rubyScore >= pythonScore) {
        $("#ruby").fadeToggle();
      } else if (pythonScore >= javascriptScore && pythonScore >= rubyScore) {
        $("#python").fadeToggle();
      }
    }
  });
});