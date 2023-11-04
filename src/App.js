import Controller from "./Controller.js";
import { Data } from "./Model.js";
import { CONSTANT } from "./Constant.js";
import Lotto from "./Lotto.js";
import View from "./View.js";

class App {
    async play() {
        let amount = 5;
        let lottoArray = [];
        for (let i = 0; i < amount; i++)
            lottoArray.push(new Lotto(Controller.generateRandomLottoNum()));
        View.showLottoNum(amount, lottoArray);
    }
}

export default App;
