import { Console } from '@woowacourse/mission-utils';
import LottoController from '../controllers/LottoController.js';
import { LOTTO_COMMAND, LOTTO_MESSAGE } from '../constants/message.js';

export default class UserView {

    #lottoController

    constructor() {
        this.#lottoController = new LottoController();
    }

    async startLottoGame() {
        const money = await Console.readLineAsync(LOTTO_COMMAND.inputPurchaseAmountCommand);
        this.#initLottoUser(money);
    }

    #initLottoUser(money) {
        this.#lottoController.createUser(money);
        this.#lottoController.createUserLottoNumbers();
    }

    async inputWinningNumbers() {
        const winningNumbers = await Console.readLineAsync(LOTTO_COMMAND.inputWinningNumbersCommand);
        this.#initLottoGame(winningNumbers);
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
        const bonusNumber = await Console.readLineAsync(LOTTO_COMMAND.inputBonusNumberCommand);
        this.#lottoController.validateBonusNumber(bonusNumber);
        return bonusNumber;
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