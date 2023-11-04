import Controller from "./Controller.js";
import { Data } from "./Model.js";

class App {
    async play() {
        let userLotto = [1, 2, 3, 4, 5, 7];
        let winningLotto = [1, 2, 3, 4, 5, 6];
        let bonusNum = 7;
        let d =
            Data.lottoResult[
                Controller.compareLottoNum(userLotto, winningLotto, bonusNum)
            ];
        console.log(
            Controller.compareLottoNum(userLotto, winningLotto, bonusNum),
            d
        );
    }
}

export default App;
