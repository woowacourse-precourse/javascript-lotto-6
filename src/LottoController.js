import LottoGame from './LottoGame.js';
import InputUi from './ui/inputUi.js';

class LottoController {
    constructor() {
        this.game = null;
        this.inputUi = new InputUi();
        this.lottos = null;
    }
    async sellLotto() {
        const PURCHASE_AMOUNT = await this.inputUi.askpurchaseAmount();
        this.game = new LottoGame(PURCHASE_AMOUNT); 
    }
    
}
export default LottoController;