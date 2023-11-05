import {MissionUtils} from "@woowacourse/mission-utils";
import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";
import validation from "./utils/valiidation.js";

class LottoManager {
    constructor() {
        this.myLottoNumbers = null;
        this.count = null;
    }

    makeNumbersAndPrint(lottoTickets) {
        this.count = 0;
        while (this.count < lottoTickets) {
            const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6,
            );
            this.#setAndPrintNumbers(randomNumbers);
            this.count++;
        }
    }

    #setAndPrintNumbers(numbers) {
        const sortedNumbers = numbers.sort((a, b) => a - b);
        if (this.count === 0) {
            this.myLottoNumbers = [sortedNumbers]
        } else {
            this.myLottoNumbers = [this.myLottoNumbers, sortedNumbers];
        }
        MissionUtils.Console.print(sortedNumbers);
    }

    async getBonusNumber(winningNumbers) {
        const bonusNumber =
            await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
        validation.isValidBonusNumber(winningNumbers, bonusNumber)
        this.bonusNumber = bonusNumber;
    }

    get MyLottoNumbers() {
        return this.myLottoNumbers;
    }
}

export default LottoManager