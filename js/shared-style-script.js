$(document).ready(function () {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
      document.getElementById("navbar").style.boxShadow = "";
    } else {
      document.getElementById("navbar").style.boxShadow = "0 0px 8px 0 black";
    }
  };
});

// User sign in
function handleSignin() {
  let username = $("#username").val();
  let password = $("#password").val();
  console.log(username, password);
  signin(username, password).then(function () {
    console.log("HELLO");
    usertype_id = localStorage.usertype_id;
    console.log("usertype is " + usertype_id, typeof usertype_id);
    if (parseInt(usertype_id) === 1) window.location.replace("admin-home.html");
  })
  .catch(function(){
    $('#error-msg').removeClass('d-none');
    document.getElementById('username').style.borderColor = 'red';
    document.getElementById('password').style.borderColor = 'red';
  });
}
