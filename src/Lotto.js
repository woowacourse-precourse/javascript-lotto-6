class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#validateDuplicate(numbers);
        this.#numbers = numbers;

    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    #validateDuplicate(numbers) {
        const SET_NUMBERS = new Set(numbers);
        if (SET_NUMBERS.length !== numbers.length) {
            throw new Error("[ERROR] 중복되는 로또 번호가 입력 되었습니다.");
        }

    }

}

export default Lotto;
