import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";
import LottoSeller from "./LottoSeller.js";
import LottoManager from "./LottoManager.js";
import Lotto from "./Lotto.js";
import ResultBoard from "./ResultBoard.js";
import validation from "./utils/valiidation.js";
import valiidation from "./utils/valiidation.js";

class App {
    async play() {
        const lottoManager = new LottoManager();
        let moneyInput;
        //돈 잘못 입력시 다시 인풋
        while (true) {
            moneyInput =
                await inputHandler.getInput(INPUT_MESSAGE.MONEY);
            if (valiidation.isValidMoney(moneyInput) !== 'retry')
                break;
        }
        validation.isValidNumber(moneyInput)
        const lottoSeller = await new LottoSeller(parseInt(moneyInput));
        await lottoSeller.buyLotto();
        const lottoTickets = lottoSeller.lottoTicketsNumber;
        lottoManager.makeNumbersAndPrint(lottoTickets);

        const numbersInput =
            await inputHandler.getInput(INPUT_MESSAGE.WINNING_NUMBERS);

        const lotto = new Lotto(numbersInput.split(','));

        const winningNumbers =
            numbersInput.split(',').map((input) => parseInt(input))


        const bonusInput = await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
        await valiidation.isValidBonusNumber(winningNumbers, parseInt(bonusInput));

        const resultBoard = new ResultBoard(lottoManager.myLottoNumbers);

        resultBoard.decideWinning(winningNumbers, bonusInput)
        resultBoard.printResultTable();

        resultBoard.calculateEarning(lottoSeller.lottoTickets)
    }

}

const app = new App();
app.play();

export default App;
