import InputView from "../View/Input.js";
import OutputView from '../View/Output.js';

import LottoController from "./LottoController.js";
import WinningLotto from "../Model/Winning.js";
import RankController from "./RankController.js";
import Lotto from "../Model/Lotto.js";
import BonusBall from "../Model/BonusBall.js";

import Validator from "../Model/Validator.js";

class LottoPlay {
    #LottoController;
    #WinningLotto;
    #rank;

    constructor() {
        this.#LottoController = new LottoController();
        this.#WinningLotto = new WinningLotto();
        this.#rank = new RankController();
    }

    async buyLottos() {
        const money = await InputView.readPurchaseAmount();

        try {
            this.validate(money);
        } catch (error) {
            OutputView.print(error.message);
            return await this.buyLottos();
        }

        this.#LottoController.set(money);
        OutputView.printLottos(this.#LottoController.get());
    }

    validate(money) {
        Validator.availability(money);
        Validator.unit(money);
        Validator.numberType(money);
    }

    async createWinningLotto() {
        const lotto = await this.pickWinningLotto();
        const bonusBall = await this.pickBonusBall(lotto);
        this.setWinningLotto(lotto, bonusBall);
    }

    async pickWinningLotto() {
        const numbers = await InputView.readWinningLotto();

        try {
            return new Lotto(numbers);
        } catch (error) {
            OutputView.print(error.message);
            return await this.pickWinningLotto();
        }
    }

    async pickBonusBall(lotto) {
        const number = await InputView.readBonusBall();

        try {
            return new BonusBall(number, lotto);
        } catch (error) {
            OutputView.print(error.message);
            return await this.pickBonusBall(lotto);
        }
    }

    setWinningLotto(lotto, bonusBall) {
        this.#WinningLotto = new WinningLotto(lotto, bonusBall);
    }

    createWinningResult() {
        this.#LottoController.checkWinning(this.#WinningLotto, this.#rank);
        const winningsRate = this.#LottoController.calculateWinnings(this.#rank);
        OutputView.printWinningResult(this.#rank.get(), winningsRate);
    }
}

export default LottoPlay;