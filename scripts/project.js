


let IOTDInfo = [];
let imageInfo = null;
switch(selector) {
    case `HD`:
        imageInfo = file.hdurl
    break;
    case `RD`:
        imageInfo = file.url
    break;
}

const displayPictureData = (info) => {
    info.forEach(element => {
        let article = document.createElement(`article`);
        let h3 = document.createElement(`h3`);
        h3.textContent = element.templeName;
        let imgpart = document.createElement(`img`);
        imgpart.setAttribute('src', element.imageUrl);
        imgpart.setAttribute('alt', element.location);
        article.appendChild(h3);
        article.appendChild(imgpart);
        document.querySelector(`#IOTD`).appendChild(article);
    });
}

const getIOTD = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=treOI92TTRBV2iQetv88az6Il6NjyLkmaWdYGZrv`)
    doStuff(response);
}

const doStuff = async(data) =>  {
    IOTDInfo = await data.json();
    console.log("first: ", IOTDInfo);
    displayPictureData(IOTDInfo);
}
/* reset Function */
reset = () => {
    templesElement.remove(`#article`);
}

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
};







const url = 'https://steamgames-special-offers.p.rapidapi.com/games_list/?start=0&count=10&region=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b3e8f6faemsh5c89dba3fac164bp11dbf3jsned297fef838d',
		'X-RapidAPI-Host': 'steamgames-special-offers.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}