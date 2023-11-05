import LottoGame from './LottoGame.js';
import OutputUi from './ui/OutputUi.js';
import InputUi from './ui/inputUi.js';

class LottoController {
    constructor() {
        this.game = null;
        this.inputUi = new InputUi();
        this.outputUi = new OutputUi();
        this.lottos = null;
    }
    async sellLotto() {
        const PURCHASE_AMOUNT = await this.inputUi.askpurchaseAmount();
        this.game = new LottoGame(PURCHASE_AMOUNT);
        this.outputUi.printPurchasedLottos(this.game.getLottoNumbers());
    }
}
export default LottoController;