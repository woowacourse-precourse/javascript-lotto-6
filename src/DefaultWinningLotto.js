import Lotto from "./Lotto.js";
class DefaultWinningLotto {
    numbers;
    constructor(numbers) {
        this.#validate(numbers);
        this.numbers = numbers;
    }

    #validate(numbers) {
        new Lotto(numbers);
    }
}
export default DefaultWinningLotto;