import {MissionUtils} from "@woowacourse/mission-utils";
import gameController from "./controller/GameController.js";
import ErrorMessage from "./constants/ErrorMessage.js";

class App {
    async play() {

        await gameController();

    }
}

export default App;