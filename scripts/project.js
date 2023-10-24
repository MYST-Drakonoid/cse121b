
let IOTDInfo = [];
let imageInfoHD = null;
let imageInfo = null;
const IODTElement = document.getElementById(`#IODT`)


const displayPictureData = (info, FL) => {
     
        let article = document.createElement(`article`);
        let h3 = document.createElement(`h3`);
        h3.textContent = info.title;
        let bodyPart = document.createElement("body");
        bodyPart.textContent = info.explanation
        let imgpart = document.createElement(`img`);
        imageinfo = sortBy(info, FL)
        imgpart.setAttribute('src', imageInfoHD);
        imgpart.setAttribute('alt', info.title);
        imgpart.style.width = "800px";
        imgpart.style.display = "block";        
        imgpart.style.marginLeft = "auto";
        imgpart.style.marginRight = "auto";
        
        article.appendChild(h3);
        article.appendChild(imgpart);
        article.appendChild(bodyPart)
        article.style.width = "800px";
        article.style.display = "block";        
        article.style.marginLeft = "auto";
        article.style.marginRight = "auto";
        document.querySelector(`#IOTD`).appendChild(article);
        
    
}

const getIOTD = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=treOI92TTRBV2iQetv88az6Il6NjyLkmaWdYGZrv`)
    doStuff(response);
}

const doStuff = async(data) =>  {
    DB = await data.json();
    console.log("first: ", DB);
    let firstload = 0
    imageInfoHD = DB.hdurl;
    imageInfo = DB.url;
    displayPictureData(DB, firstload)
    firstload++
    return DB;
}
/* reset Function */
reset = (FL) => {
    if (FL !== 0){
    IODTElement.remove(`#article`);
    }
}

sortBy = (file, FL) => {
    /* reset the element */
    reset(FL)
    let imagedata = null;
    const selector = document.getElementById(`quality slector`)
    
    selector.remove();
    
        
    // if (("#quality slector :selected").textContent() == "HD")
    // {
    //     imagedata = imageInfoHD
    //     return imageinfo
    // }
    // else 
    // {
    //     imagedata = imageInfo
    //     return imagedata
    // }
        // switch(selector) {
        //     case `HD`:
        //         reset()
        //         imagedata = imageInfoHD
        //         return imagedata
        //     break;
        //     case `RD`:
        //         reset()
        //         imagedata = imageInfo
        //         return imagedata
        //     break;
        // }
        
        
    };
        
    
    const getSteamDB = async () => {
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

        
    }









    
    
    


IOTDInfo = getIOTD();
// document.querySelector(`#quality slector`).addEventListener(`change`, () => {displayPictureData(IOTDInfo, 1)});