// Encapsulate variables in an object to avoid the global scope
var app = {
  count: 0,
  currentIndex: 0,
  images: ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"],
};

// Function to display the clicked image
function displayImage(imageSrc) {
  var imageElement = document.getElementById("large-pic");
  imageElement.src = imageSrc;
}

// Function to change count
function changeCount(change) {
  if (app.count + change >= 0) {
    app.count += change;
    document.getElementById("count").innerText = app.count;
  }
}

// Function to show count in cart
function addToCart() {
  let x = app.count;
  let p = 125.00;
  let t = p * x;
  if (x > 0) {
    document.getElementById("count-in-cart").innerText = x;
    document.getElementById("qnt").innerText = x;
    document.getElementById("total-price").innerText = "$" + t;
    document.getElementById("count-in-cart").style.display = 'flex';
    document.getElementById("count").innerHTML = 0;
  }
}




//Function to toggle cart
function displayCart() {
  //let x = count;
  let x = app.count;
  let emptyCart = document.getElementById("emptycartDetails");
  emptyCart.classList.toggle("open");
  if (x > 0){
    let fullCart = document.getElementById("fullcartDetails");
    fullCart.classList.toggle("open");
  }  
}


//Function to show lightbox
function openLightBox(){
  document.getElementById("lightbox").style.display = 'flex';
}

//Function to close lightbox
function closeLightBox(){
  document.getElementById("lightbox").style.display = 'none';
}

// Function to display the clicked image in lightbox
function displayLightBig(imageSrc) {
  // Get the large image element
  var lightBig = document.getElementById("lightBig");
  // Change the source of the large image
  lightBig.src = imageSrc;
}

//Function for image slider
var currentIndex = 0;

function imageSliderNext(){
  var images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
  var imageElement = document.getElementById("lightBig");
  if (currentIndex < images.length -1){
   currentIndex = (currentIndex + 1) % images.length;
   imageElement.src = images[currentIndex];
  } 
}

function imageSliderPrev(){
  var images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];
  var imageElement = document.getElementById("lightBig");
  if (currentIndex > 0){
    currentIndex = (currentIndex - 1 + images.length) % images.length;;
    imageElement.src = images[currentIndex];
  }
}


//Function to delete item
function deleteItem(){
  let emptyCart = document.getElementById("emptycartDetails");
  let fullCart = document.getElementById("fullcartDetails");
  let countInCart = document.getElementById("count-in-cart");

  emptyCart.style.display = "flex";
  fullCart.style.display = "none";
  countInCart.innerText = 0;
  countInCart.style.display = "none";
}
