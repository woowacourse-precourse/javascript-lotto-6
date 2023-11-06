import {MissionUtils} from "@woowacourse/mission-utils";
import gameController from "./controller/GameController.js";
import ErrorMessage from "./constants/ErrorMessage.js";

class App {
    async play() {
        try {
            await gameController();
        } catch (e) {
            MissionUtils.Console.print(ErrorMessage.LAST_MESSAGE);
        }
    }
}

export default App;