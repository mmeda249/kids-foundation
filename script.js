// Back-to-Top button
mybutton = document.getElementById("myBtn");

// When the user scrolls 20px down from the top of the page, the button will appear
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scrolls back to top of page when user clicks the button
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Internet Explorer & Firefox
  document.body.scrollTop = 0; // For Safari
}

// Alert after user has submitted a message from contact form - this code may be removed after further revisions
var form = document.getElementById('contact_form');

function myFunction() {
  if (form.checkValidity()) {
    alert("Message sent! Thanks for filling out the form!");
  }
}