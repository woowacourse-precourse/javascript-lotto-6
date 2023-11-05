import {MissionUtils} from "@woowacourse/mission-utils";
import gameController from "./controller/GameController.js";

class App {
    async play() {
        try {
            await gameController();
        } catch (e) {
            MissionUtils.Console.print("[ERROR]");
        }
    }
}

export default App;