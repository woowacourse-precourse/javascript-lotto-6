class WinningNumbers extends Lotto {
    #bonus;

    constructor(numbers, bonus) {
        _validate(numbers);
        this._numbers = numbers;
        this.#bonus = bonus;
    }
}