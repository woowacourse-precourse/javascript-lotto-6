import InputView from "../view/input-view.js";

class LottoController {
    #inputView;

    constructor() {
        this.#inputView = new InputView();
    }

    async play() {
        let count = await this.#inputView.readPurchaseAmount();
    }
}

export default LottoController;