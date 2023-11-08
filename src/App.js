import {MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import LottoController from "./LottoController.js";
import LottoView from "./LottoView.js";
import LottoModel from "./LottoModel.js";


class App {
    async play() {
        const model = new LottoModel();
        const view = new LottoView();
        const controller = new LottoController(model, view);
        await controller.play();
    }
}

export default App;
