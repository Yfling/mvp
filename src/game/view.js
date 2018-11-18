import GamePage from '../pages/game-page.js'
import GameOverPage from '../pages/game-over-page.js'

class GameView {
    constructor () {
    }

    showGameOverPage () {
        this.gameOverPage.show();
    }

    restartGame () {
        this.gamePage.restart();
    }

    initGameOverPage (calllbacks) {
        this.gameOverPage = new GameOverPage(callbacks);
        this.gameOverPage.init();
    }

    initGamePage (callbacks) {
        this.gamePage = new GamePage(callbacks)
        this.gamePage.init();
    }
}

export default new GameView();
