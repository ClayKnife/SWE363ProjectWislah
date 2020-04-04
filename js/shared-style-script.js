$(document).ready(function(){
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos == 0) {
          document.getElementById("navbar").style.boxShadow = "";
        } else {
          document.getElementById("navbar").style.boxShadow = "0 0px 8px 0 black";
        }
      }
});