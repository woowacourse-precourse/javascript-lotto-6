import PRIZE_MONEYMONEY from "./constants/money.js";

class Bank {
    #prizeCount;
    #profit;
    #profitRate;
    #money;

    constructor(money, prize) {
        this.#money = money;
        this.#prizeCount = {
            first: prize[4],
            second: prize[3],
            third: prize[2],
            fourth: prize[1],
            fifth: prize[0],
        };
        this.#profit = 0;
        this.#profitRate;
    }

    calculateProfit() {
        for (const key in this.#prizeCount) {
            this.#profit += this.#prizeCount[key] * PRIZE_MONEYMONEY[key];
        }
    }

    getProfitRate() {
        this.calculateProfit();
        this.#profitRate = (this.#profit / this.#money) * 100;
        return this.#profitRate.toFixed(1);
    }
}

export default Bank;