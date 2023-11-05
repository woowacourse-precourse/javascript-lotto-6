import {MissionUtils} from "@woowacourse/mission-utils";
import validation from "./utils/valiidation.js";
import Lotto from "./Lotto.js";
import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";

class LottoMaker {
    constructor() {
        this.winningNumber = null;
        this.bonusNumber = null;
    }

    async setLottoNumbers() {
        const inputs = await inputHandler.getInput(INPUT_MESSAGE.WINNING_NUMBERS);
        const array = inputs.split(',');
        const lotto = new Lotto(array);
        this.winningNumber = lotto.winningNumbers

        const input = await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
        await this.#validateBonusNumber(input);
        this.bonusNumber = input;
    }

    #validateBonusNumber(numbers) {
        validation.isValidInputCount(numbers, 1);
        validation.isValidRange(numbers);
        validation.hasSameNumber(...numbers,);
    }


    makeLottoAndPrint(lottoTickets) {
        let count = 0;
        while (count < lottoTickets) {
            const MakeAndPrintLottoNumbers = () => {
                const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
                    1,
                    45,
                    6,
                );
                const sortedNumbers = randomNumbers.sort((a, b) => a - b);
                MissionUtils.Console.print(sortedNumbers);
            };
            MakeAndPrintLottoNumbers();
            count++;
        }
    }
}

export default LottoMaker