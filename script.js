// responsive navbar function 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "cb-topnav") {
    x.className += " responsive";
  } else {
    x.className = "cb-topnav";
  }
}

// accrodin start here

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
// function for active tabs
var btnContainer = document.getElementById("myTopnav");
var btns = btnContainer.getElementsByClassName("btn");

for (var a = 0; a < btns.length; a++) {
	btns[a].addEventListener("click", function() {
		var current = document.getElementsByClassName("cb-active");
		current[0].className = current[0].className.replace(" cb-active", "");
		this.className += " cb-active";
	});
}