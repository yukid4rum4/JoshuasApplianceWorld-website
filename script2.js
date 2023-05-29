document.addEventListener('DOMContentLoaded', function() {
    let menu = document.getElementById('menu');
    let navbar = document.querySelector('.navbar');
  
    // Add a click event listener to the menu icon
    menu.addEventListener('click', function() {
      // Toggle the 'rotate-animation' class on the menu icon
      menu.classList.toggle('rotate-animation');
    });
  
    // Add a click event listener to the menu icon
    menu.onclick = () => {
      // Toggle the 'active' class on the navbar
      navbar.classList.toggle('active');
    };
  });
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
        text: 'Check the name and descriptions of our products and scroll down to see the "Order Now" button!'+
        '\nYou must fill up the form first before proceeding to Order',
        confirmButtonText: 'OK'
      });
    }
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

  const next = document.getElementById("next");
  const nextButton = document.getElementById("nextButton");
  const orderFormWrapper = document.getElementById("orderFormWrapper");
  const orderForm = document.getElementById("orderForm");
  const submitOrder = document.getElementById("submitOrder");
  const cancelOrder = document.getElementById("cancelOrder");
  
  // Show the form 
  next.addEventListener("click",()=>{
    orderFormWrapper.classList.add("show");
  })
  nextButton.addEventListener("click", () => {
    orderFormWrapper.classList.add("show");
  });
  
  // Submit event
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