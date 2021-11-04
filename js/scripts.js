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

    if (favAnimal === "rat") {
      javascriptScore += 1;
    } else if (favAnimal === "cat") {
      rubyScore += 1;
    } else if (favAnimal === "snake") {
      pythonScore += 1;
    }
  });
});