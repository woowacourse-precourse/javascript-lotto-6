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
        await this.handlePurchaseAmount();
        this.generateLotto = this.#lottoGenerator.generateRandomNumbers(this.#purchaseAmount/1000);
        await this.handleWinningNumbers();
        await this.handleBonusNumber();
        this.calculateStatistics(this.generateLotto);
        const totalRate = this.calculateTotalRate(this.#purchaseAmount);
        this.#output.printTotalRate(totalRate);    
    }

    async handlePurchaseAmount() {
        try {
            this.#purchaseAmount = await this.#userInput.inputPurchaseAmount();
        } catch (error){
            this.#userInput.printError(error.message);
            await this.handlePurchaseAmount();
        }
    }

    async handleWinningNumbers() {
        try {
            this.#winningNumbers = await this.#userInput.inputWinningNumbers();
        } catch (error) {
            this.#userInput.printError(error.message);
            await this.handleWinningNumbers();
        }
    }

    async handleBonusNumber() {
        try {
            this.#bonusNumber = await this.#userInput.inputBonusNumber(this.#winningNumbers);
        } catch (error) {
            this.#userInput.printError(error.message);
            await this.handleBonusNumber();
        }
    }

    compareLotto(winNumbers, lotto, bonusNumber) {
        let matchCount = 0;
        for (const lottoNumber of lotto) {
            if (winNumbers.includes(lottoNumber)) {
                matchCount++;
            }
        }
        if (matchCount == 5 && lotto.includes(bonusNumber)) {
            matchCount += 2;
        }
        if (this.#dicQuantity[matchCount] !== undefined) {
            this.#dicQuantity[matchCount]++;
        }
    }

    calculateStatistics(generateLotto) {
        for (let i = 0; i < generateLotto.length; i++) {
            this.compareLotto(this.#winningNumbers, generateLotto[i], this.#bonusNumber);
        }
        this.#output.printStatistics(this.#dicQuantity);
    }

    calculateTotalRate(purchaseAmount) { 
        const WINNING_PRIZES = { 3: 5000, 4: 50000, 5: 1500000, 6: 2000000000, 7: 30000000 };
        let totalReturn = 0;
        for (const key of Object.keys(this.#dicQuantity)) {
            if (WINNING_PRIZES[key]) {
                totalReturn += this.#dicQuantity[key] * WINNING_PRIZES[key];
            }
        }
        return (totalReturn / purchaseAmount) * 100;
    }
}

export default LottoController;