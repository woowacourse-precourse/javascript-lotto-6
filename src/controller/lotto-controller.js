import MyLotto from "../domain/MyLotto.js";
import InputView from "../view/input-view.js";
import OutputView from "../view/output-view.js";

class LottoController {
    #inputView;
    #outputView;

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
    }

    async play() {
        let perchaseNumber = await this.#inputView.readPurchaseAmount();
        let myLotto = new MyLotto(perchaseNumber);

        this.#outputView.printMyLotto(perchaseNumber, myLotto);
        
        let winningLotto = await this.#inputView.readWinningLotto();

        this.#outputView.printResult(myLotto, winningLotto);
    }
}

export default LottoController;