import UserInput from "../View/UserInput.js";
import LottoGenerator from "../Model/LottoGenerator.js";
import Output from "../View/Output.js";

class LottoController{
    constructor() {
    }

    //TODO: Controller 구현 
    async start() {
        const userInput = new UserInput();
        const lottogenerator = new LottoGenerator();
        const output = new Output();
        
        this.purchaseAmount = await userInput.inputPurchaseAmount();
        this.generateLotto = lottogenerator.generateRandomNumbers(this.purchaseAmount/1000);
        
        output.printLotto(this.generateLotto);
        this.winningNumbers = await userInput.inputWinningNumbers();
        this.bonusNumber = await userInput.inputBonusNumber();
    }
}

export default LottoController;