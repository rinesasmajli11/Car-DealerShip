document.addEventListener("DOMContentLoaded", function () {
  
  const carList = document.querySelector(".car-list");
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const markSelect = document.getElementById("mark");
  const minPriceInput = document.getElementById("min-price");
  const maxPriceInput = document.getElementById("max-price");

 
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Data for car details
  const data = {
    categories: {
      Audi: [
        {
          model: "Audi A4",
          price: 35000,
          image: "img/car.png",
          rating: 4.7,
          horsepower: 201,
          fuelType: "Petrol",
          transmission: "Automatic",
        },
        {
          model: "Audi Q7",
          price: 55000,
          image: "img/audi_q7-removebg-preview.png",
          rating: 4.8,
          horsepower: 335,
          fuelType: "Diesel",
          transmission: "Automatic",
        },
      ],
      Ferrari: [
        {
          model: "Ferrari 488 GTB",
          price: 280000,
          image: "img/ferrarii-removebg-preview.png",
          rating: 5.0,
          horsepower: 661,
          fuelType: "Petrol",
          transmission: "Automatic",
        },
      ],
      Toyota: [
        {
          model: "Toyota Corolla",
          price: 22000,
          image: "img/corolla_toy-removebg-preview.png",
          rating: 4.5,
          horsepower: 169,
          fuelType: "Hybrid",
          transmission: "Automatic",
        },
        {
          model: "Toyota RAV4",
          price: 27000,
          image: "img/rav_toyota-removebg-preview.png",
          rating: 4.6,
          horsepower: 203,
          fuelType: "Petrol",
          transmission: "Automatic",
        },
      ],
      Honda: [
        {
          model: "Honda Civic",
          price: 25000,
          image: "img/honda_civic-removebg-preview.png",
          rating: 4.6,
          horsepower: 180,
          fuelType: "Petrol",
          transmission: "Automatic",
        },
        {
          model: "Honda CR-V",
          price: 32000,
          image: "img/honda_cr-removebg-preview.png",
          rating: 4.7,
          horsepower: 190,
          fuelType: "Hybrid",
          transmission: "Automatic",
        },
      ],
      Tesla: [
        {
          model: "Tesla Model 3",
          price: 45000,
          image: "img/teslla_car-removebg-preview.png",
          rating: 4.9,
          horsepower: 283,
          fuelType: "Electric",
          transmission: "Automatic",
        },
        {
          model: "Tesla Model X",
          price: 90000,
          image: "img/Tesla-Model-X-removebg-preview.png",
          rating: 5.0,
          horsepower: 670,
          fuelType: "Electric",
          transmission: "Automatic",
        },
      ],
    },
  };

  function initialize() {
    populateMarkOptions();
    applyFilters();
  }
  function populateMarkOptions() {
    let brands = Object.keys(data.categories);
    brands.forEach((brand) => {
      let option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      markSelect.appendChild(option);
    });
  }

  // Apply filters based on user input
  function applyFilters() {
    let selectedMark = markSelect.value;
    let minPrice = parseFloat(minPriceInput.value) || 0;
    let maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    let filteredCars = [];
    if (selectedMark === "All") {
      for (let brand in data.categories) {
        filteredCars = filteredCars.concat(data.categories[brand]);
      }
    } else {
      filteredCars = data.categories[selectedMark] || [];
    }

    filteredCars = filteredCars.filter(
      (car) => car.price >= minPrice && car.price <= maxPrice
    );

    displayCars(filteredCars);
  }

  // Display cars based on filters
  function displayCars(cars) {
    carList.innerHTML = "";
    cars.forEach((car) => {
      let carItem = document.createElement("div");
      carItem.classList.add("car-item");
      carItem.innerHTML = `
                <img src="${car.image}" alt="${car.model}">
                <span>${car.model}</span>
                <span>$${car.price}</span>
                <button class="button add-to-cart" data-model="${car.model}">Add to cart</button>
            `;
      carList.appendChild(carItem);
    });

    let addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  }

  // Add car to cart
  function addToCart(event) {
    let carModel = event.target.dataset.model;
    let car = findCarByModel(carModel);

    if (car) {
      let existingCarIndex = cart.findIndex((item) => item.model === car.model);

      if (existingCarIndex > -1) {
        cart[existingCarIndex].quantity += 1;
      } else {
        cart.push({
          ...car,
          quantity: 1,
        });
      }

      updateCart();
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }

  // Find car by model
  function findCarByModel(model) {
    for (let brand in data.categories) {
      let car = data.categories[brand].find((car) => car.model === model);
      if (car) return car;
    }
    return null;
  }

  // Update cart display
  function updateCart() {
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item) => {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.model}">
        <span>${item.model}</span>
        <span>$${item.price}</span>
        <button class="button remove-from-cart" data-model="${item.model}">Remove</button>
      `;
      cartItemsContainer.appendChild(cartItem);
      totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `$${totalPrice}`;

  
    const removeButtons = document.querySelectorAll(".remove-from-cart");
    removeButtons.forEach((button) => {
      button.addEventListener("click", removeFromCart);
    });
  }

  // Remove car from cart
  function removeFromCart(event) {
    let carModel = event.target.dataset.model;
    cart = cart.filter((item) => item.model !== carModel);
    updateCart();
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Event listeners for filters
  markSelect.addEventListener("change", applyFilters);
  minPriceInput.addEventListener("input", applyFilters);
  maxPriceInput.addEventListener("input", applyFilters);

  initialize();
  updateCart();
});


document.addEventListener("DOMContentLoaded", function () {
  const buyNowButton = document.getElementById('buy-now-button');
  const payButton = document.querySelector('.pay-button');


  if (buyNowButton) {
    buyNowButton.addEventListener('click', openPaymentModal);
  }

  if (payButton) {
    payButton.addEventListener('click', processPayment);
  }
});

// Function to open the payment modal
function openPaymentModal() {
  document.getElementById('paymentModal').style.display = 'block';
}

// Function to close the payment modal
function closePaymentModal() {
  document.getElementById('paymentModal').style.display = 'none';
}

// Function to process payment
function processPayment() {
  let cardNumber = document.getElementById('card-number').value.trim();
  let expirationDate = document.getElementById('expiration-date').value.trim();
  let cvv = document.getElementById('cvv').value.trim();

  
  if (cardNumber !== '' && expirationDate !== '' && cvv !== '') {
    simulatePaymentProcess();

    // Close the payment modal
    closePaymentModal();

    // Show the success modal
    setTimeout(showSuccessModal, 500);
  } else {
    alert('Please fill in all payment details!');
  }
}

// Function to simulate payment processing
function simulatePaymentProcess() {
  console.log('Payment processing simulated...');
}

// Function to show the success modal
function showSuccessModal() {
  let successModal = document.getElementById('succsess-modal');
  if (successModal) {
    successModal.classList.add('active');
    successModal.style.display = 'flex';
    successModal.querySelector('.modal-content').style.display = 'flex';

    console.log('Success modal displayed!');

    setTimeout(function() {
      successModal.classList.remove('active');
      successModal.style.display = 'none';
      successModal.querySelector('.modal-content').style.display = 'none';
      // Reload the page
      window.location.reload();
    }, 3000);
  }
}
const payButton = document.querySelector('.pay-button');
if (payButton) {
    payButton.addEventListener('click', processPayment);
}
