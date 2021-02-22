
// Side navigation
function menu_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
    document.getElementById("slider-wrapper").style.display = "none";
  }
  
  function menu_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("slider-wrapper").style.display = "";
  }
  

  
  // Accordions
  function myAccFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } else { 
      x.className = x.className.replace(" show", "");
    }
  }
  
  