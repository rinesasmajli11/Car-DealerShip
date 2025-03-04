const jsonData = {
  "categories": {
    "Audi": [
      {
        "model": "Audi A4",
        "price": 35000,
        "image": "img/car.png",
        "rating": 4.7,
        "horsepower": 201,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      },
      {
        "model": "Audi Q7",
        "price": 55000,
        "image": "img/audi_q7-removebg-preview.png",
        "rating": 4.8,
        "horsepower": 335,
        "fuelType": "Diesel",
        "transmission": "Automatic"
      }
    ],
    "Ferrari": [
      {
        "model": "Ferrari 488 GTB",
        "price": 280000,
        "image": "img/ferrarii-removebg-preview.png",
        "rating": 5.0,
        "horsepower": 661,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      }
    ],
    "Toyota": [
      {
        "model": "Toyota Corolla",
        "price": 22000,
        "image": "img/corolla_toy-removebg-preview.png",
        "rating": 4.5,
        "horsepower": 169,
        "fuelType": "Hybrid",
        "transmission": "Automatic"
      },
      {
        "model": "Toyota RAV4",
        "price": 27000,
        "image": "img/rav_toyota-removebg-preview.png",
        "rating": 4.6,
        "horsepower": 203,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      }
    ],
    "Honda": [
      {
        "model": "Honda Civic",
        "price": 25000,
        "image": "img/honda_civic-removebg-preview.png",
        "rating": 4.6,
        "horsepower": 180,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      },
      {
        "model": "Honda CR-V",
        "price": 32000,
        "image": "img/honda_cr-removebg-preview.png",
        "rating": 4.7,
        "horsepower": 190,
        "fuelType": "Hybrid",
        "transmission": "Automatic"
      }
    ],
    "Tesla": [
      {
        "model": "Tesla Model 3",
        "price": 45000,
        "image": "img/teslla_car-removebg-preview.png",
        "rating": 4.9,
        "horsepower": 283,
        "fuelType": "Electric",
        "transmission": "Automatic"
      },
      {
        "model": "Tesla Model X",
        "price": 90000,
        "image": "img/Tesla-Model-X-removebg-preview.png",
        "rating": 5.0,
        "horsepower": 670,
        "fuelType": "Electric",
        "transmission": "Automatic"
      }
    ]
  
  }
};
const allCars = [];
Object.keys(jsonData.categories).forEach(category => {
  jsonData.categories[category].forEach(car => {
      allCars.push({ category, ...car });
  });
});

let currentIndex = 0;
function changeCar(index) {
  if (index >= allCars.length) {
      index = 0;
  } else if (index < 0) {
      index = allCars.length - 1;
  }

  currentIndex = index;
  const car = allCars[index];

  document.getElementById("hero-bg-text").innerText = car.category;
  document.getElementById("car-name").innerText = car.model;
  document.getElementById("car-image").src = car.image;

  // Aktivizo dot-in e duhur
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === index % dots.length) {
          dot.classList.add("active");
      }
  });
}
document.getElementById("next-button").addEventListener("click", () => {
  changeCar(currentIndex + 1);
});

document.getElementById("prev-button").addEventListener("click", () => {
  changeCar(currentIndex - 1);
});

document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
      changeCar(index);
  });
});

changeCar(0);

//Explore Section
const data = {
  "categories": {
    "Audi": [
      {
        "model": "Audi A4",
        "price": 35000,
        "image": "img/car.png",
        "rating": 4.7,
        "horsepower": 201,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      },
      {
        "model": "Audi Q7",
        "price": 55000,
        "image": "img/audi_q7-removebg-preview.png",
        "rating": 4.8,
        "horsepower": 335,
        "fuelType": "Diesel",
        "transmission": "Automatic"
      }
    ],
    "Ferrari": [
      {
        "model": "Ferrari 488 GTB",
        "price": 280000,
        "image": "img/ferrarii-removebg-preview.png",
        "rating": 5.0,
        "horsepower": 661,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      }
    ],
    "Toyota": [
      {
        "model": "Toyota Corolla",
        "price": 22000,
        "image": "img/corolla_toy-removebg-preview.png",
        "rating": 4.5,
        "horsepower": 169,
        "fuelType": "Hybrid",
        "transmission": "Automatic"
      },
      {
        "model": "Toyota RAV4",
        "price": 27000,
        "image": "img/rav_toyota-removebg-preview.png",
        "rating": 4.6,
        "horsepower": 203,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      }
    ],
    "Honda": [
      {
        "model": "Honda Civic",
        "price": 25000,
        "image": "img/honda_civic-removebg-preview.png",
        "rating": 4.6,
        "horsepower": 180,
        "fuelType": "Petrol",
        "transmission": "Automatic"
      },
      {
        "model": "Honda CR-V",
        "price": 32000,
        "image": "img/honda_cr-removebg-preview.png",
        "rating": 4.7,
        "horsepower": 190,
        "fuelType": "Hybrid",
        "transmission": "Automatic"
      }
    ],
    "Tesla": [
      {
        "model": "Tesla Model 3",
        "price": 45000,
        "image": "img/teslla_car-removebg-preview.png",
        "rating": 4.9,
        "horsepower": 283,
        "fuelType": "Electric",
        "transmission": "Automatic"
      },
      {
        "model": "Tesla Model X",
        "price": 90000,
        "image": "img/Tesla-Model-X-removebg-preview.png",
        "rating": 5.0,
        "horsepower": 670,
        "fuelType": "Electric",
        "transmission": "Automatic"
      }
    ]
  }
};

function showCars(category) {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';

  if (category === 'all') {
    for (const brand in data.categories) {
      data.categories[brand].forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        const title = document.createElement('h3');
        title.textContent = car.model;
        const condition = document.createElement('p');
        condition.textContent = 'New';
        cardHeader.appendChild(title);
        cardHeader.appendChild(condition);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');
        const image = document.createElement('img');
        image.src = car.image;
        image.alt = car.model;
        imageContainer.appendChild(image);

        const detailsList = document.createElement('ul');
        const yearItem = document.createElement('li');
        const yearSpan = document.createElement('span');
        yearSpan.textContent = 'Model Year:';
        yearItem.appendChild(yearSpan);
        yearItem.appendChild(document.createTextNode('2023')); 
        detailsList.appendChild(yearItem);

        const modelItem = document.createElement('li');
        const modelSpan = document.createElement('span');
        modelSpan.textContent = 'Model:';
        modelItem.appendChild(modelSpan);
        modelItem.appendChild(document.createTextNode(car.model));
        detailsList.appendChild(modelItem);

        const fuelItem = document.createElement('li');
        const fuelSpan = document.createElement('span');
        fuelSpan.textContent = 'Fuel:';
        fuelItem.appendChild(fuelSpan);
        fuelItem.appendChild(document.createTextNode(car.fuelType));
        detailsList.appendChild(fuelItem);

        const price = document.createElement('h3');
        price.classList.add('price');
        price.textContent = `$${car.price}`;

        const orderButton = document.createElement('a'); 
        orderButton.href = `cars.html?model=${car.model}&brand=${brand}`;
        orderButton.classList.add('order-btn');
        orderButton.textContent = 'Order Now ';
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-chevron-right');
        orderButton.appendChild(icon);

        cardContent.appendChild(imageContainer);
        cardContent.appendChild(detailsList);
        cardContent.appendChild(price);
        cardContent.appendChild(orderButton);

        card.appendChild(cardHeader);
        card.appendChild(cardContent);

        container.appendChild(card);
      });
    }
  } else {
    if (data.categories[category]) {
      data.categories[category].forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        const title = document.createElement('h3');
        title.textContent = car.model;
        const condition = document.createElement('p');
        condition.textContent = 'New';
        cardHeader.appendChild(title);
        cardHeader.appendChild(condition);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');
        const image = document.createElement('img');
        image.src = car.image;
        image.alt = car.model;
        imageContainer.appendChild(image);

        const detailsList = document.createElement('ul');
        const yearItem = document.createElement('li');
        const yearSpan = document.createElement('span');
        yearSpan.textContent = 'Model Year:';
        yearItem.appendChild(yearSpan);
        yearItem.appendChild(document.createTextNode('2023')); 
        detailsList.appendChild(yearItem);

        const modelItem = document.createElement('li');
        const modelSpan = document.createElement('span');
        modelSpan.textContent = 'Model:';
        modelItem.appendChild(modelSpan);
        modelItem.appendChild(document.createTextNode(car.model));
        detailsList.appendChild(modelItem);

        const fuelItem = document.createElement('li');
        const fuelSpan = document.createElement('span');
        fuelSpan.textContent = 'Fuel:';
        fuelItem.appendChild(fuelSpan);
        fuelItem.appendChild(document.createTextNode(car.fuelType));
        detailsList.appendChild(fuelItem);

        const price = document.createElement('h3');
        price.classList.add('price');
        price.textContent = `$${car.price}`;

        const orderButton = document.createElement('a'); 
        orderButton.href = `cars.html?model=${car.model}&brand=${category}`; 
        orderButton.classList.add('order-btn');
        orderButton.textContent = 'Order Now ';
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-chevron-right');
        orderButton.appendChild(icon);

        cardContent.appendChild(imageContainer);
        cardContent.appendChild(detailsList);
        cardContent.appendChild(price);
        cardContent.appendChild(orderButton);

        card.appendChild(cardHeader);
        card.appendChild(cardContent);

        container.appendChild(card);
      });
    }
  }
}

// butonat e kategorive
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category');
  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = button.getAttribute('data-category');
      categoryButtons.forEach(b => b.classList.remove('active'));
      button.classList.add('active');
      showCars(category);
    });
  });


  showCars('all');
});

document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.querySelectorAll(".category");
  const carCards = document.querySelectorAll(".card");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-category");

      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

     
      carCards.forEach((card) => {
        const carCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || carCategory === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});


// Newsletter Subscription
document.getElementById('subscribe-btn').addEventListener('click', function (e) {
  e.preventDefault(); 

  const emailInput = document.getElementById('newsletter-email');
  const email = emailInput.value;

  if (validateEmail(email)) {
      localStorage.setItem('newsletterEmail', email);
      alert('Thank you for subscribing!');
      emailInput.value = '';
  } else {
      alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (name && email && subject && message) {
      const contactData = {
          name: name,
          email: email,
          subject: subject,
          message: message,
      };

      console.log('Contact Form Data:', contactData);
      alert('Message sent successfully!');

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
  } else {
      alert('Please fill out all fields.');
  }
});

