import UserInput from "../View/UserInput.js";
import { Console } from "@woowacourse/mission-utils";

class LottoController{
    constructor() {
        this.purchaseAmount = 0;
        this.winningNumbers = [];
        this.bonusNumber = 0;
    }

    //TODO: Controller 구현 
    async start() {
        const userInput = new UserInput();
        
        this.purchaseAmount = await userInput.inputPurchaseAmount();
        this.winningNumbers = await userInput.inputWinningNumbers();
        this.bonusNumber = await userInput.inputBonusNumber();

        Console.print(this.bonusNumber);
    }
}

export default LottoController;