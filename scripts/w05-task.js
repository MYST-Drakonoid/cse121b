/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById(`#temples`);

let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(element => {
        let article = document.createElement(`article`);
        let h3 = document.createElement(`h3`);
        h3.innerhtml = element.templeName;
        let imgpart = document.createElement(`img`);
        imgpart.setAttribute('src', element.imageUrl);
        imgpart.setAttribute('alt', element.location);
        article.appendChild(h3);
        article.appendChild(imgpart);
        document.querySelector(`#temples`).appendChild(article);
    });

};
/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch(`https://byui-cse.github.io/cse121b-ww-course/resources/temples.json`)
    doStuff(response);
}

const doStuff = async(data) =>  {
    templeList = await data.json();
    console.log("first: ", templeList);
    displayTemples(templeList);
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
};


getTemples();

/* Event Listener */
document.querySelector(`#sortBy`).addEventListener(`change`, () => {sortBy(templeList)});