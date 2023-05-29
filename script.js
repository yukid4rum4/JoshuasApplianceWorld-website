let menu = document.getElementById('menu');
let navbar = document.querySelector('.navbar')

// Add a click event listener to the image
menu.addEventListener('click', function() {
  // Toggle the 'rotate-animation' class on the image
  menu.classList.toggle('rotate-animation');
});
menu.onclick = () =>{
    navbar.classList.toggle('active')
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 3000); // Change slide every 2 seconds (adjust the duration as needed)
}
window.addEventListener("load", function() {
  var body = document.querySelector("body");
  var loadingDiv = document.querySelector(".loading");

  body.classList.add("loading"); // Add 'loading' class to body to disable scrolling

  setTimeout(function() {
    body.classList.remove("loading"); // Remove 'loading' class from body to enable scrolling
    loadingDiv.style.display = "none";
    document.querySelector(".container").style.display = "block";
  }, 2000); // Set the delay in milliseconds (2 seconds in this example)
});
window.addEventListener('DOMContentLoaded', function() {
  var helpLink = document.getElementById('helpLink');
  helpLink.addEventListener('click', function(event) {
    event.preventDefault();
    showAlert();
  });

  function showAlert() {
    Swal.fire({
      icon: 'question',
      title: 'Help',
      text: 'Click the "View Gallery" button to see our high quality products!',
      confirmButtonText: 'OK'
    });
  }
});
  const next = document.getElementById("next");
  const orderFormWrapper = document.getElementById("orderFormWrapper");
  const orderForm = document.getElementById("orderForm");
  const submitOrder = document.getElementById("submitOrder");
  const cancelOrder = document.getElementById("cancelOrder");
  
  // Show the form 
    next.addEventListener("click",()=>{
    orderFormWrapper.classList.add("show");
  })
  
  // Submit order event
  submitOrder.addEventListener("click", (event) => {
    event.preventDefault();
  
    // Get the input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
  
    if (firstName && lastName && address) {
      // Show confirmation with name and address
      const confirmationMessage = `Name: ${firstName} ${lastName}\nAddress: ${address}`;
      if (confirm(confirmationMessage + "\n\nIs this information correct? Please verify!")) {
        // Proceed to the next page
        window.location.href = "index3.html";
      }
    } else {
      // Alert to fill up the form
      alert("Please fill up the form to proceed.");
    }
  });
  // Cancel order event
cancelOrder.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior of the button
  orderFormWrapper.classList.remove("show"); // Hide the form
});
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the input fields
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var subject = document.getElementById("subject").value;

  // Check if any field is empty
  if (firstName === "" || lastName === "" || subject === "") {
    alert("Please fill up the form.");
    document.getElementById("myForm").reset();
  } else {
    alert("Your message is delivered.");
    document.getElementById("myForm").reset();
  }
});
