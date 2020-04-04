$(document).ready(function(){
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos == 0) {
          document.getElementById("navbar").style.boxShadow = "";
          document.getElementById("navbar").style.backgroundColor = "";
        } else {
          document.getElementById("navbar").style.boxShadow = " 0 0px 8px 0 black";
          document.getElementById("navbar").style.backgroundColor = " rgba(242,241,235,0.97)";
        }
      }
});