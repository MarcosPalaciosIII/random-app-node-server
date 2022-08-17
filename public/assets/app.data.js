const cardSuites1 = ['H', 'C', "D", "S"]
const cardValues1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const media = {
    png: [{prefix: 'card_back_', range: [0, 0], fileType: 'png'}],
    jpeg: [{prefix: 'card_back_', range: [1, 5], fileType: 'jpeg'}],
    gif: [{prefix: 'gaming', range: [0, 9], fileType: 'gif'}]
}

const cardSuitesOptions = [cardSuites1]
const cardValuesOptions = [cardValues1]
const cardSuiteValuePairing = {
    standardCards: {
        suiteArray: cardSuites1,
        valuesArray: cardValues1
    }
}

// Reusable Functions
const randomNumber = maxLimitNumber => Math.floor(Math.random() * maxLimitNumber);

function setPromotions(element, contentType, promotionalNumberOfElements, elementId) {
    let imageSrcArray = []
    let container = `
        <div class="promotion--box center--column">
    `;

    for(let i = 0; i < promotionalNumberOfElements; i++) {
        let img = `
            <div class="promotion--box-image center--content">
                <img class="promotion--img" src="${newGame.media.getContent(contentType)}" />
            </div>
        `
        container += img;
        imageSrcArray.push(newGame.media.getContent(contentType));
    }

    container += `
        </div>
    `;

    console.log({innerHtml: element.innerHTML, media: newGame.media.getContent(contentType), container, contentType, document})

    element.innerHTML = '';
    element.innerHTML += container;

    // [...document.querySelectorAll(`#${elementId} ${element.tagName} .promotion--img`)].forEach((img, i) => {
    //     img.src = imageSrcArray[i];
    // })
}