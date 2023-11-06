import {MissionUtils} from "@woowacourse/mission-utils";
import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";
import Lotto from "./Lotto.js";
import validation from "./utils/validation.js";

class LottoManager {
    constructor(lottoTickets) {
        // this.lotto = null;
        this.myLottoNumbers = null;
        this.count = null;
        this.lottoTickets = lottoTickets;
        this.winningNumbers = null;
        this.bonusNumber = null;
    }

    makeLottoAndPrint() {
        this.count = 0;
        while (this.count < this.lottoTickets) {
            const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6,
            );
            const sortedNumbers = randomNumbers.sort((a, b) => a - b);
            if (this.count === 0) {
                this.myLottoNumbers = [sortedNumbers]
            } else {
                this.myLottoNumbers = [...this.myLottoNumbers, sortedNumbers];
            }
            const sorted = sortedNumbers.join(', ');
            MissionUtils.Console.print("[" + sorted + "]");
            this.count++;
        }
    }

    async runLottoWithNumbers() {
        await this.setWinningNumbers();
        console.log('winning', this.winningNumbers)
        await this.setBonusNumber();
        console.log('bonus', this.bonusNumber)
        await this.#validateBonusNumber(parseInt(this.bonusNumber))
        return new Lotto(this.winningNumbers)
    }

    async setWinningNumbers() {
        const input = await inputHandler.getInput(INPUT_MESSAGE.WINNING_NUMBERS);
        this.winningNumbers = input.split(',').map((item) => parseInt(item))
    }

    async setBonusNumber() {
        const input = await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
        this.bonusNumber = parseInt(input)
    }

    #validateBonusNumber() {
        validation.isValidInputCount([this.bonusNumber], 1);
        validation.isValidRange([this.bonusNumber]);
        validation.hasSameNumber([...this.winningNumbers, this.bonusNumber]);
        validation.isValidNumber(this.bonusNumber);
    }

    // // const bonusInput = await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
    // // await validation.isValidBonusNumber(lotto.winningNumbers, bonusInput);
    // const bonusInput = await InputHandler.getBonusNumber();
}

export default LottoManager