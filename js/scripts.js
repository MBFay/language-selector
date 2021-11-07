$(document).ready(function() {
  $("#survey-form").submit(function(event) {
    event.preventDefault();
    const favAnimal = $(":radio[name=fav-animal]:checked").val();
    const favColor = $(":radio[name=fav-color]:checked").val();
    const favBeachWalkLength = $(":radio[name=fav-beach-walk-length]:checked").val();
    const favLocation = $(":radio[name=fav-location]:checked").val();
    const favBeverage = $(":radio[name=fav-beverage]:checked").val();

    let rubyScore = 0;
    let javascriptScore = 0;
    let pythonScore = 0;

    $(".programming-language").hide();

    console.log(favAnimal);

    if (favAnimal === undefined || favColor === undefined || favBeachWalkLength === undefined || favLocation === undefined || favBeverage === undefined) {
      alert("Please fill out the full form!");
    } else {
      if (favAnimal === "rat") {
        javascriptScore += 1;
      } else if (favAnimal === "cat") {
        rubyScore += 1;
      } else if (favAnimal === "snake") {
        pythonScore += 1;
      }
  
      if (favColor === "blue") {
        javascriptScore += 1;
      } else if (favColor === "red") {
        rubyScore += 1;
      } else if (favColor === "green") {
        pythonScore += 1;
      }
  
      if (favBeachWalkLength === "medium") {
        javascriptScore += 1;
      } else if (favBeachWalkLength === "short") {
        rubyScore += 1;
      } else if (favBeachWalkLength === "long") {
        pythonScore += 1;
      }
  
      if (favLocation === "city") {
        javascriptScore += 1;
      } else if (favLocation === "beach") {
        rubyScore += 1;
      } else if (favLocation === "mountain") {
        pythonScore += 1;
      }
  
      if (favBeverage === "tea") {
        javascriptScore += 1;
      } else if (favBeverage === "coffee") {
        rubyScore += 1;
      } else if (favBeverage === "soda") {
        pythonScore += 1;
      }
  
      if (javascriptScore >= rubyScore && javascriptScore >= pythonScore) {
        $("#javascript").slideToggle();
      } else if (rubyScore >= javascriptScore && rubyScore >= pythonScore) {
        $("#ruby").slideToggle();
      } else if (pythonScore >= javascriptScore && pythonScore >= rubyScore) {
        $("#python").slideToggle();
      }
    }
  });
});