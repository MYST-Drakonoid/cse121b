/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Anthony Peterson",
    photo: "images/IMG_4581.JPG",
    favoriteFoods: ["sushi", "canned Fish", "fruits", "Vegetables", "Potatos"],
    hobbies: ["video games", "coding","marksmanship", "readinng"],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Colorado",
        length: "1 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Germany",
        length: "4 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Arizona",
        length: "6 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Georgia",
        length: "6 months"
    }
);
myProfile.placesLived.push(
    {
        place: "Germany",
        length: "10 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Arizona",
        length: "1 year"
    }
);
myProfile.placesLived.push(
    {
        place: "Canada",
        length: "1 year"
    }
);

/* DOM Manipulation - Output */

document.querySelector(`#name`).textContent = myProfile.name;
const imageelement = document.querySelector(`#photo`);
imageelement.setAttribute('src', myProfile.photo);
imageelement.setAttribute('alt', `image of ${myProfile.name}`);

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement(`li`);
    li.textContent = food;
    document.querySelector(`#favorite-foods`).appendChild(li);
});

myProfile.hobbies.forEach(things => {
    let li = document.createElement(`li`);
    li.textContent = things
    document.querySelector(`#hobbies`).appendChild(li);
});

myProfile.placesLived.forEach(PL => {
    let place = document.createElement(`dt`);
    place.textContent = PL.place;
    let time = document.createElement(`dd`);
    time.textContent = PL.length;
    document.querySelector(`#places-lived`).appendChild(place);
    document.querySelector(`#places-lived`).appendChild(time);
});


/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


