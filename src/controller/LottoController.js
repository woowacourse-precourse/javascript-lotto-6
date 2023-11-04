import InputAndOutput from "../../view/InputAndOutput.js";

class LottoController{
    
    constructor(){
        this.inputAndOutput = new InputAndOutput(this);
    }

    async startLotto() {
        const PURCHASE_AMOUNT = await this.inputAndOutput.inputPurchaseAmount();
        const WIN_NUMBER = await this.inputAndOutput.inputWinNumber();
        const BONUS_NUMBER = await this.inputAndOutput.inputBonusNumber();
    }
}
export default LottoController;