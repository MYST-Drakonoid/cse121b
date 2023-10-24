



const luckyNumber = () => {
    let list = []
    let newNum = null;
    while (list.length < 10)
    {
    newNum = getRandomInt(9)
    list.push((newNum))
    }
    return list;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export const mainBlock = () => {
    let numList = [];
    numList = luckyNumber()
    let LN = document.createElement(`h3`)
    LN.textContent = `Have some random Lucky Numbers: ${numList}`
    LN.style.width = "800px";
    document.querySelector(`#IOTD`).appendChild(LN);
}