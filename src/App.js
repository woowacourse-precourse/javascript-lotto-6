import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";
import LottoSeller from "./LottoSeller.js";
import LottoManager from "./LottoManager.js";
import Lotto from "./Lotto.js";
import ResultBoard from "./ResultBoard.js";

class App {


    async play() {
        const lottoManager = new LottoManager();
        const moneyInput =
            await inputHandler.getInput(INPUT_MESSAGE.MONEY);

        const lottoSeller = await new LottoSeller(parseInt(moneyInput));
        await lottoSeller.buyLotto();
        const lottoTickets = lottoSeller.lottoTicketsNumber;
        lottoManager.makeNumbersAndPrint(lottoTickets);

        const numbersInput =
            await inputHandler.getInput(INPUT_MESSAGE.WINNING_NUMBERS);

        const lotto = new Lotto(numbersInput.split(','));


        const winningNumbers =
            numbersInput.split(',').map((input) => parseInt(input))
        
        await lottoManager.getBonusNumber(winningNumbers);


        const resultBoard = new ResultBoard(lottoManager.myLottoNumbers);
        resultBoard.decideWinning(lotto.winningNumbers, lottoManager.bonusNumber)
        resultBoard.printResultTable();

        resultBoard.calculateEarning(lottoSeller.lottoTickets)
    }

}

const app = new App();
app.play();

export default App;
