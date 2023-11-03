import InputAndOutput from "../../view/InputAndOutput";

class LottoController{
    
    constructor(){
        this.inputAndOutput = new InputAndOutput(this);
    }

    async startLotto() {
        const PURCHASE_AMOUNT = await this.inputAndOutput.inputPurchaseAmount();
    }
}
export default LottoController;