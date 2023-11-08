import { Console } from '@woowacourse/mission-utils';
import LottoController from '../controllers/LottoController.js';
import { LOTTO_COMMAND, LOTTO_MESSAGE } from '../constants/message.js';

export default class UserView {

    #lottoController

    constructor() {
        this.#lottoController = new LottoController();
    }

    async startLottoGame() {
        try {
            const money = await Console.readLineAsync(LOTTO_COMMAND.inputPurchaseAmountCommand);
            this.#initLottoUser(money);
        } catch (error) {
            Console.print(error.message);
            this.startLottoGame();
        }
    }

    #initLottoUser(money) {
        this.#lottoController.createUser(money);
        this.#lottoController.createUserLottoNumbers();
    }

    async inputWinningNumbers() {
        try {
            const winningNumbers = await Console.readLineAsync(LOTTO_COMMAND.inputWinningNumbersCommand);
            this.#initLottoGame(winningNumbers);
        } catch (error) {
            Console.print(error.message);
            this.inputWinningNumbers();
        }
    }

    #initLottoGame(winningNumbers) {
        this.#lottoController.createLotto(winningNumbers.split(','));
    }

    printUserLottoNumbers() {
        const numberOfPurchases = this.#lottoController.getUserNumberOfPurchases();
        const lottoNumbers = this.#lottoController.getUserLottoNumbers();

        LOTTO_MESSAGE.printUserLottoNumberMessage(numberOfPurchases, lottoNumbers);
    }

    async inputBonusNumber() {
        try {
            const bonusNumber = await Console.readLineAsync(LOTTO_COMMAND.inputBonusNumberCommand);
            this.#lottoController.validateBonusNumber(bonusNumber);
            return bonusNumber;
        } catch (error) {
            Console.print(error.message);
            this.inputBonusNumber();
        }
    }

    printLottoResult(bonusNumber) {
        const results = this.#lottoController.getLottoWinningResult(bonusNumber);

        LOTTO_MESSAGE.printLottoResultMessage(results);
    }

    printEarningsRate(bonusNumber) {
        const earnings = this.#lottoController.getEarningsRate(bonusNumber);
        const purchaseAmount = this.#lottoController.getUserPerchaseAmount();
        LOTTO_MESSAGE.printEarningsRateMessage(earnings / purchaseAmount * 100);
    }
}