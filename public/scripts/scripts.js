let playersArray = [];
let numberOfPlayers = 0;


window.addEventListener('load', () => {
    console.log('Scripts Connected');
    // const playerNameInput = document.querySelector("#player-name-input");
    // const startGameButton = document.querySelector('#start-game-button');

    // console.log({playerNameInput, startGameButton, theTitle});

    // startGameButton.addEventListener('click', () => {
    //     playersArray.push(titleInput.value);
    //     playerNameInput.value = '';
    // })

    // ============================================

    // const gameDetails = document.getElementById('game--details');
    // const gameBoard = document.getElementById('game--board');
    // const gameBoardHtml = document.getElementById('game--board-html');
    // const gameActions = document.getElementById('game--actions');

    // console.log({gameDetails, gameBoard, gameBoardHtml, gameActions});

    // // console.log({location: window.location.pathname});
    // // if(window.location.pathname)
    // const myGame = new Game();
    // myGame.startGame();
    // console.log({myGame})
    setGlobalVarsByEndpoint();
})


function toggleClassList(element, classesArray) {
    // console.log({element});
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
        
            console.log({playerNameInput, startGameButton, players1Button, players2Button, topSection, centerSection, bottomSection, startSetUpButton, warningMessage});

            startSetUpButton.addEventListener('click', () => {
                console.log('clicked start set up!');
                toggleClassList(topSection, ['show', 'hide']);
                toggleClassList(centerSection, ['show', 'hide']);
                
            })

            players1Button.addEventListener('click', () => {
                console.log('clicked 1 player button!');
                toggleClassList(centerSection, ['show', 'hide']);
                toggleClassList(bottomSection, ['show', 'hide']);
                numberOfPlayers = 1;
            })


        
            startGameButton.addEventListener('click', () => {
                if(!!playerNameInput.value) {
                    playersArray.push(playerNameInput.value);
                    playerNameInput.value = '';
                    warningMessage.classList.remove('show')
                    warningMessage.classList.add('hide')
                } else {
                    toggleClassList(warningMessage, ['show', 'hide']);
                    warningMessage.innerHTML = 'You Must Enter A Name'
                    return;
                }

                if(numberOfPlayers === 1 && playersArray.length === 1) {
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
            const gameDetails = document.getElementById('game--details');
            const gameBoard = document.getElementById('game--board');
            const gameBoardHtml = document.getElementById('game--board-html');
            const gameActions = document.getElementById('game--actions');

            console.log({gameDetails, gameBoard, gameBoardHtml, gameActions, numberOfPlayers, playersArray});

            const myGame = new Game();
            myGame.startGame();
            console.log({myGame})
        break;
        default:
            // serve(path.join(process.cwd(), req.url));
    }
}