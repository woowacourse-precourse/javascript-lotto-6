import UserInput from '../view/UserInput.js';
import Purchase from '../model/Purchase.js';
import Calculate from '../model/Calculate.js';
import Result from '../view/Result.js';

class LottoController {
    #amount;
    #arrays;
    #numbers;
    #bonus;
    #collectedCount;
    #rate;

    constructor() {}

    async lottoGamePlay() {
        await this.getAmount();
    }

    async getAmount() {
        this.#amount = await UserInput.RequestAmount();
        await this.publicLottos(this.#amount);
    }

    async publicLottos(amount) {
        const purchase = new Purchase(amount);
        this.#arrays = await purchase.public();
        await this.getNumbers();
    }

    async getNumbers() {
        this.#numbers = await UserInput.RequestNumbers();
        await this.getBonus();
    }

    async getBonus() {
        this.#bonus = await UserInput.RequestBonus(this.#numbers);
        await this.onLottoResult();
    }

    async onLottoResult() {
        const calculate = new Calculate(this.#amount, this.#arrays, this.#numbers, this.#bonus);
        const count = calculate.count();
        this.#collectedCount = await calculate.collect(count);
        this.#rate = calculate.rate(this.#collectedCount);
        new Result(this.#collectedCount, this.#rate);
    }
}

export default LottoController;