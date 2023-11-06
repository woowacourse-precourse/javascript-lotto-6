import LottoSeller from "./LottoSeller.js";
import LottoManager from "./LottoManager.js";

class App {
    constructor() {
        this.lottoTickets = null;
    }

    async play() {
        const lottoSeller = new LottoSeller();
        await lottoSeller.buyLotto();
        this.lottoTickets = lottoSeller.lottoTickets;

        const lottoManager = new LottoManager(this.lottoTickets)
        lottoManager.makeLottoAndPrint();
        const lotto = await lottoManager.runLottoWithNumbers();
        console.log(lotto.winningNumbers)

        // // const bonusInput = await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
        // // await validation.isValidBonusNumber(lotto.winningNumbers, bonusInput);
        // const bonusInput = await InputHandler.getBonusNumber();
        //
        // const resultBoard = new ResultBoard(lottoManager.myLottoNumbers);
        //
        // resultBoard.decideWinning(lotto.winningNumbers, bonusInput)
        // resultBoard.printResultTable();
        //
        // resultBoard.calculateEarning(this.lottoTickets)
    }

}

const app = new App();
app.play();

export default App;
