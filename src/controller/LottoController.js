import InputAndOutput from "../../view/InputAndOutput.js";
import LottoPlay from "../LottoPlay.js";

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
        this.drawLotto(PURCHASE_LOTTO_NUMBER,WIN_NUMBER,BONUS_NUMBER,PURCHASE_PRICE);
    }

    async drawLotto(purchaseNum, winNum, bonusNum, price) {
        const WIN_RESULT = this.lottoPlay.contingWinNumber(purchaseNum, winNum);
        const BONUS_RESULT = this.lottoPlay.countingBonusNumber(purchaseNum, bonusNum);
        const RESULT_COUNT = this.lottoPlay.winningNumber(WIN_RESULT,BONUS_RESULT);
        this.resultLotto(RESULT_COUNT, price);
    }
    async resultLotto(result, price){
        const PRIZE_MONEY = this.lottoPlay.prizeMoney(result);
        const RETURN_RATIO = this.lottoPlay.returnRatio(PRIZE_MONEY,price);
        this.inputAndOutput.gameResultOutput(result, RETURN_RATIO);
    }
}
export default LottoController