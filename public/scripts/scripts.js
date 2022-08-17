let playersArray = [];
let numberOfPlayers = 0;
let newGame;


window.addEventListener('load', () => {
    console.log('Scripts Connected');
    setGlobalVarsByEndpoint();
})


function toggleClassList(element, classesArray) {
    classesArray.forEach((className) => element.classList.toggle(className));
  }

function setGlobalVarsByEndpoint() {
    switch(window.location.pathname) {
        case '/':
            const playerNameInput = document.querySelector("#player-name-input");
            const startGameButton = document.querySelector('#start-game-button');
            const players1Button = document.querySelector('#select--players-1');
            const players2Button = document.querySelector('#select--players-2');
            const startSetUpButton = document.querySelector('#start-set-up-button');
            const topSection = document.querySelector('.section--top');
            const centerSection = document.querySelector('.section--center');
            const bottomSection = document.querySelector('.section--bottom');
            const warningMessage = document.querySelector('.warning');

            startSetUpButton.addEventListener('click', () => {
                toggleClassList(topSection, ['show', 'hide']);
                toggleClassList(centerSection, ['show', 'hide']);
                
            })

            players1Button.addEventListener('click', () => {
                toggleClassList(centerSection, ['show', 'hide']);
                toggleClassList(bottomSection, ['show', 'hide']);
                numberOfPlayers = 1;
            })

            players2Button.addEventListener('click', () => {
                toggleClassList(centerSection, ['show', 'hide']);
                toggleClassList(bottomSection, ['show', 'hide']);
                numberOfPlayers = 2;
            })


        
            startGameButton.addEventListener('click', () => {
                if(!!playerNameInput.value) {
                    playersArray.push(playerNameInput.value);
                    playerNameInput.value = '';
                    warningMessage.classList.remove('show')
                    warningMessage.classList.add('hide')

                    if(numberOfPlayers === 2 && playersArray.length !== 2) {
                        startGameButton.innerHTML = `Confirm Player 2's Name`
                    }
                } else {
                    toggleClassList(warningMessage, ['show', 'hide']);
                    warningMessage.innerHTML = 'You Must Enter A Name'
                    return;
                }

                // if((numberOfPlayers === 1 && playersArray.length === 1) || (numberOfPlayers === 2 && playersArray.length === 2)) {
                if(numberOfPlayers === 1 && playersArray.length === 1) {
                    playersArray.push('Player 2');
                    localStorage.setItem("playersArray", JSON.stringify(playersArray));
                    localStorage.setItem("numberOfPlayers", numberOfPlayers);
                    window.location.pathname = '/game'
                }
            })

        break;
        case '/about':
            // serve(path.join(process.cwd(), 'views/about.html'));
        break;
        case '/instructions':
            // serve(path.join(process.cwd(), 'views/instructions.html'));
        break;
        case '/game':
            playersArray = JSON.parse(localStorage.getItem("playersArray"));
            numberOfPlayers = (localStorage.getItem("numberOfPlayers"));
            const gameDetails = document.getElementById('game--details');
            const gameBoard = document.getElementById('game--board');
            const gameBoardHtml = document.getElementById('game--board-html');
            const gameActions = document.getElementById('game--actions');
            const leftContent = document.querySelector('#game--container-left_content');
            const rightContent = document.querySelector('#game--container-right_content');

            console.log({gameDetails, gameBoard, gameBoardHtml, gameActions, numberOfPlayers, playersArray, leftContent, rightContent});

            newGame = new Game(1, playersArray);
            newGame.startGame();
            console.log({newGame});

            // const leftPromotions = document.createElement('img')
            setPromotions(leftContent, 'gif', 4, leftContent.getAttribute('id'));
            setPromotions(rightContent, 'gif', 4, rightContent.getAttribute('id'));
            // leftPromotions.setAttribute('src', myGame.media.getContent('gif'))
        break;
        default:
            // serve(path.join(process.cwd(), req.url));
    }
}

// function setPromotions(element, contentType, promotionalNumberOfElements) {
//     // const container = document.createElement('div');
//     const images = {}
//     container.setAttribute('class', 'promotion--box')
//     for(let i = 0; i < promotionalNumberOfElements; i++) {
//         let img = document.createElement('img');
//         img.src = `${newGame.media.getContent(contentType)}`;
//         img.setAttribute('class', 'promotion--img')

//         console.log({img, src: img.src, randomMedia: newGame.media.getContent(contentType)})
//         container.append(img)
//     }

//     console.log({innerHtml: element.innerHTML, media: newGame.media[contentType], container, contentType})

//     element.innerHTML = '';
//     element.append(container);
// }