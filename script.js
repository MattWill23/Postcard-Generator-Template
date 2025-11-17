

/*const selector = document.getElementById("postcard");

document.getElementById("states").addEventListener("change", function() {
  var selectedState = this.value;
  var imagePath = "img/" + selectedState + "@2x.jpg";
  selector.style.backgroundImage = "url("+imagePath+")";
  selector.alt = selectedState;
  document.getElementById("greeting").innerHTML = "Greetings from";
  document.getElementById("state-heading").innerHTML = "" + selectedState;
}
); */

const selector = document.getElementById('postcard');
const dropdown = document.getElementById("states");
const Generate = document.getElementById("greeting")
const choice = document.getElementById("state-heading")
document.getElementById('states').addEventListener("change", function() {
    var selectedState = this.value;
    var imagePath = "img/" + selectedState + "@2x.jpg";
    selector.style.backgroundImage = "url('" + imagePath + "')";
    selector.alt = selectedState;
    document.getElementById("greeting").text = ("Greetings from");
    
    document.getElementById("greeting").innerHTML = "Greetings from";
    document.getElementById("state-heading").innerHTML = [selectedState];
} 
)

