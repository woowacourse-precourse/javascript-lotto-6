import UserInput from "../View/UserInput.js";
import LottoGenerator from "../Model/LottoGenerator.js";
import Output from "../View/Output.js";

class LottoController{
    #dicQuantity = { 3 : 0 , 4 : 0 , 5 : 0 , 6 : 0 , 7 : 0 };

    #userInput;

    #lottoGenerator;

    #output;

    #purchaseAmount;

    #winningNumbers;

    #bonusNumber;

    constructor() {
        this.#userInput = new UserInput();
        this.#lottoGenerator = new LottoGenerator();
        this.#output = new Output();
        this.#purchaseAmount = 0;
        this.#winningNumbers = [];
        this.#bonusNumber = 0;
    }

    async start() {
        
        await this.occurIssuePurchaseAmount();
        this.generateLotto = this.#lottoGenerator.generateRandomNumbers(this.#purchaseAmount/1000);
    
        this.#output.printLotto(this.generateLotto);
        await this.occurIssueWinningNumbers();
        await this.occurIssueBonusNumber();
        
        for (let i = 0; i < this.generateLotto.length; i++) {

            this.comapreLotto(this.#winningNumbers,this.generateLotto[i],this.bonusNumber)
        }
        this.#output.printStatistics(this.#dicQuantity);
        const totalRate = this.getTotalRate(this.#purchaseAmount);
        this.#output.printTotalRate(totalRate);    
    }

    async occurIssuePurchaseAmount() {
        try {
            this.#purchaseAmount = await this.#userInput.inputPurchaseAmount();
        } catch (e){
            this.#userInput.printError(e.message);
            await this.occurIssuePurchaseAmount();
        }
    }

    async occurIssueWinningNumbers() {
        try {
            this.#winningNumbers = await this.#userInput.inputWinningNumbers();
        } catch (e) {
            this.#userInput.printError(e.message);
            await this.occurIssueWinningNumbers();
        }
    }

    async occurIssueBonusNumber() {
        try {
            this.bonusNumber = await this.#userInput.inputBonusNumber(this.#winningNumbers);
        } catch (e) {
            this.#userInput.printError(e.message);
            await this.occurIssueBonusNumber();
        }
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