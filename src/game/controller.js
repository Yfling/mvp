import gameView from './view'
import gameModel from './model'

class GameController {
    constructor() {
        this.gameView = gameView;
        this.gameModel = gameModel;
    }

    showGameOverPage = () => {
        this.gameView.showGameOverPage();
    }

    restartGame =  () => {
        this.gameView.restartGame();
    }

    initPages () {
        const gamePageCallbacks = {
            showGameOverPage: this.showGameOverPage
        }

        const gameOverPagesCallbacks = {
            gameRestart: this.restartGame
        }

        this.gameView.initGamePage(gamePageCallbacks)
        this.gameView.initGameOverPage(gameOverPagesCallbacks);
    }
}

export default new GameController();
