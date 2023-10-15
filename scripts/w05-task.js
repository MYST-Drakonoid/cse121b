/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.createElement(`div`);

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(element => {
        let part = document.createElement(`article`);
        let part2 = document.createElement(`h3`);
        part2.innerHTML = element.templeName;
        let imgpart = document.createElement(`img`);
        imgpart.setAttribute('src', element.imageUrl);
        imgpart.setAttribute('alt', element.location);
        part.appendChild(part2, imgpart);
        templesElement.appendChild(part);
    });
};
/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`)
    doStuff(response);
}

function doStuff(data) {
    templeList = data;
    console.log("first: ", templeList);
}
/* reset Function */
reset = () => {
    templesElement.remove(`#article`);
}

/* sortBy Function */
sortBy = (temples) => {
    /* reset the element */
    reset(templesElement)
    filter = document.getElementById(`sortby`)

    function checkWordtrue(test, against) {
        return test.includes(`utah`) === true;
    };
    function checkWordfalse(test, against) {
        return test.includes(`utah`) === false;
    };
    function checkDate(test, against) {
        return test < 1950;
    };
    switch(filter) {
        case `utah`:
            displayTemples(temples.location.filter(checkWordtrue))
        break;
        case `nonutah`:
            displayTemples(temples.location.filter(checkWordfalse))
        break;
        case `older`:
            displayTemples(temples.dedicated.filter(checkDate));
        break;
        case `all`:
            displayTemples(temples);
        break;
    }
}


getTemples();

/* Event Listener */
document.querySelector(`#sortBy`).addEventListener(`change`, () => {sortBy(templeList)});