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
  document.addEventListener("DOMContentLoaded", function () {
    const ratingContainers = document.querySelectorAll(".rating");

    ratingContainers.forEach(function (container) {
        const stars = container.querySelectorAll("input[type='radio']");

        stars.forEach(function (star, index) {
            star.addEventListener("click", function () {
                const currentStar = this;
                const siblingStars = container.querySelectorAll(
                    "input[type='radio']"
                );

                siblingStars.forEach(function (siblingStar, siblingIndex) {
                    if (siblingIndex <= index) {
                        siblingStar.checked = true;
                    } else {
                        siblingStar.checked = false;
                    }
                });
                const ratingValue = currentStar.value;
                alert(`You rated ${ratingValue} stars! Thankyou!`);
            });
        });
    });
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
      text: 'Select what you want and click Add to cart! You can also rate our products. Happy Shopping!',
      confirmButtonText: 'OK'
    });
  }
});
let orderItems = [];
let totalPrice = 0;

function addProduct(productName, price) {
  var orderItem = {
    productName: productName,
    price: price
  };

  orderItems.push(orderItem);
  totalPrice += price;

  var message = `Added ${productName} to the cart.\n\nDo you want to order more?`;
  var confirmMore = confirm(message);

  if (!confirmMore) {
    checkout();
  }
}

function checkout() {
  if (orderItems.length === 0) {
    alert("No items in the order.");
    return;
  }

  var orderSummary = "Order Summary:\n\n";
  orderItems.forEach(function (item) {
    orderSummary += `${item.productName}: ₱${item.price}\n`;
  });

  orderSummary += `\nTotal Price: Php${totalPrice}\n\nDo you want to check out?`;
  var confirmCheckout = confirm(orderSummary);

  if (confirmCheckout) {
    alert("Thank you for your order!");
    orderItems = [];
    totalPrice = 0;
  } else {
    // Reload the page to start a new order
    location.reload();
  }
}

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




