class WinningNumbers {
    #numbers;
    #bonusNumber;

    constructor(numbers, bonusNumber) {
        this.#validate(numbers, bonusNumber);
        this.#numbers = numbers;
        this.#bonusNumber = bonusNumber;
    }

    #validate(numbers, bonusNumber) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
        }
        if (new Set(numbers).size !== 6) {
            throw new Error("[ERROR] 당첨 번호는 중복되지 않아야 합니다.");
        }
        if (numbers.some((number) => number < 1 || number > 45)) {
            throw new Error("[ERROR] 당첨 번호의 범위는 1~45 사이여야 합니다.");
        }
        if (numbers.includes(bonusNumber)) {
            throw new Error("[ERROR] 당첨 번호와 보너스 번호가 중복됩니다.");
        }
        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error(
                "[ERROR] 보너스 번호의 범위는 1~45 사이여야 합니다."
            );
        }
        this.#numbers = numbers;
        this.#bonusNumber = bonusNumber;
    }

    getNumbers() {
        return this.#numbers;
    }

    getBonusNumber() {
        return this.#bonusNumber;
    }
}

export default WinningNumbers;
