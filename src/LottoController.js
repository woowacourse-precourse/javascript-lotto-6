import GameUtils from './lotto/GameUtils.js';
import LottoGame from './lotto/LottoGame.js';
import OutputUi from './ui/OutputUi.js';
import InputUi from './ui/inputUi.js';

class LottoController {
    constructor() {
        this.lottoGame = null;
        this.inputUi = new InputUi();
        this.outputUi = new OutputUi();
        this.winningStatus = null;
        this.bonusNumber = null;
    }
    async sellLotto() {
        const PURCHASE_AMOUNT = await this.inputUi.askpurchaseAmount();
        this.lottoGame = new LottoGame(PURCHASE_AMOUNT);
        const SORTED_LOTTO_NUMBERS = GameUtils.sortLottoNumbers(this.lottoGame.getLottoNumbers()); 
        this.outputUi.printPurchasedLottos(SORTED_LOTTO_NUMBERS);
    }
    async winningCalculation() {
        const WINNING_NUMBER_INPUT = await this.inputUi.askWinningNumber();
        this.winningStatus = this.lottoGame.getWinningStatus(GameUtils.splitComma(WINNING_NUMBER_INPUT));
    }

}
export default LottoController;