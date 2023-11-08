import UserInput from "../View/UserInput.js";
import LottoGenerator from "../Model/LottoGenerator.js";
import Output from "../View/Output.js";

class LottoController{
    constructor() {
    }

    #dicQuantity = { 3 : 0 , 4 : 0 , 5 : 0 , 6 : 0 , 7 : 0 };

    //TODO: Controller 구현 
    async start() {
        const userInput = new UserInput();
        const lottogenerator = new LottoGenerator();
        const output = new Output();
        
        this.purchaseAmount = await userInput.inputPurchaseAmount();
        this.generateLotto = lottogenerator.generateRandomNumbers(this.purchaseAmount/1000);
        
        output.printLotto(this.generateLotto);
        this.winningNumbers = await userInput.inputWinningNumbers();
        this.bonusNumber = await userInput.inputBonusNumber(this.winningNumbers);
        
        for (let i = 0; i<this.generateLotto.length;i++) {
            this.comapreLotto(this.winningNumbers,this.generateLotto[i],this.bonusNumber)
        }
        output.printStatistics(this.#dicQuantity);
        const totalRate = this.getTotalRate(this.purchaseAmount);
        output.printTotalRate(totalRate);
    }

    comapreLotto(winNumbers, lotto, bonusNumber) {
        let matchCount = 0;
        for (const lottoNumber of lotto) {
            if (winNumbers.includes(lottoNumber)) {
                matchCount++;
            }
        }

        if (matchCount == 5) {
            if (lotto.includes(bonusNumber)) {
                matchCount += 2;
            }
        }

        if (this.#dicQuantity[matchCount] !== undefined) {
            this.#dicQuantity[matchCount]++;
        }
    }

    getTotalRate(purchaseAmount) { 
        let totalReturn = 0;
        totalReturn = totalReturn + this.#dicQuantity[3]*5000;
        totalReturn = totalReturn + this.#dicQuantity[4]*50000;
        totalReturn = totalReturn + this.#dicQuantity[5]*1500000;
        totalReturn = totalReturn + this.#dicQuantity[7]*30000000;
        totalReturn = totalReturn + this.#dicQuantity[6]*2000000000;

        return (totalReturn / purchaseAmount) * 100;
    }

}

export default LottoController;