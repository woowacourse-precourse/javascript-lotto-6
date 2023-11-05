import InputAndOutput from "../../view/InputAndOutput.js";
import LottoPlay from "../Lottoplay.js";

class LottoController{
    
    constructor(){
        this.inputAndOutput = new InputAndOutput(this);
        this.lottoPlay = new LottoPlay(this);
    }

    async startLotto() {
        const PURCHASE_PRICE = await this.inputAndOutput.inputPurchasePrice();
        const LOTTO_AMOUNT = this.lottoPlay.priceToAmount(PURCHASE_PRICE);
        const PURCHASE_LOTTO_NUMBER = this.lottoPlay.autoLottoGenerator(LOTTO_AMOUNT);
        this.inputAndOutput.purchasedLottoOutput(PURCHASE_LOTTO_NUMBER, LOTTO_AMOUNT);
        const WIN_NUMBER = await this.inputAndOutput.inputWinNumber();
        const BONUS_NUMBER = await this.inputAndOutput.inputBonusNumber(WIN_NUMBER);
        this.drawLotto(PURCHASE_LOTTO_NUMBER,WIN_NUMBER,BONUS_NUMBER);
    }

    async drawLotto(purchaseNum, winNum, bonusNum) {
        const WIN_RESULT = this.lottoPlay.contingWinNumber(purchaseNum, winNum);
        const BONUS_RESULT = this.lottoPlay.countingBonusNumber(purchaseNum, bonusNum);
        await this.inputAndOutput.gameResultOutput(WIN_RESULT, BONUS_RESULT);
    }
}
export default LottoController;