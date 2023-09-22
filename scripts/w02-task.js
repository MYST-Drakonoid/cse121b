/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Anthony Peterson';
let currYear = 2023;
let profilePic = "images/IMG_4581.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('#year');
const imageelement = document.getElementsByTagName('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currYear}`;
imageelement.item(0).setAttribute('src', profilePic);
imageelement.item(0).setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let FavFoods = ["biscuits and gravy", "pizza", "oranges", "anything leftover in the fridge"];

foodElement.textContent = FavFoods;

const newFav = "fish";

FavFoods.push(newFav);

foodElement.innerHTML += `<br>${FavFoods}`;

FavFoods.shift()

foodElement.innerHTML += `<br>${FavFoods}`;

FavFoods.pop();

foodElement.innerHTML += `<br>${FavFoods}`;