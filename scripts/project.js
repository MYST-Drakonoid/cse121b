
let IOTDInfo = [];
let imageInfo = null;


const displayPictureData = (info, imageinfo) => {
     
        let article = document.createElement(`article`);
        let h3 = document.createElement(`h3`);
        h3.textContent = info.title;
        let bodyPart = document.createElement("body");
        bodyPart.textContent = info.explanation
        let imgpart = document.createElement(`img`);
        imgpart.setAttribute('src', imageInfo);
        imgpart.setAttribute('alt', info.title);
        article.appendChild(h3);
        article.appendChild(imgpart);
        article.appendChild(bodyPart)
        document.querySelector(`#IOTD`).appendChild(article);
    
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
    IOTDInfo.remove(`#article`);
}

sortBy = (file) => {
    /* reset the element */
    reset()
    
    filter = document.getElementById(`quality slector`)
    if (file.media_type === "image")
    {
        switch(selector) {
            case `HD`:
                reset()
                imageInfo = file.hdurl
                
            break;
            case `RD`:
                reset()
                imageInfo = file.url
                
            break;
        }
        

        displayPictureData(IOTDInfo, imageInfo)
    }
    
    
    
};
getIOTD();
document.querySelector(`#quality slector`).addEventListener(`change`, () => {sortBy(IOTDInfo)});