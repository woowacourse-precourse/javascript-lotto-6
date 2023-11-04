import Controller from "./Controller.js";
import { Data } from "./Model.js";
import Lotto from "./Lotto.js";

class App {
    async play() {
        const l = Object.keys(Data.lottoResult);
        console.log(l);
    }
}

export default App;
