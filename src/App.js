import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";
import LottoSeller from "./LottoSeller.js";
import LottoManager from "./LottoManager.js";
import Lotto from "./Lotto.js";

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

        const winningNumbers =
            numbersInput.split(',').map((input) => parseInt(input))

        await lottoManager.getBonusNumber(winningNumbers);

        const lotto = new Lotto(winningNumbers);
        lottoManager.decideWinning(lotto.winningNumbers)
        lottoManager.printResultTable();
    }

}

const app = new App();
app.play();

export default App;
