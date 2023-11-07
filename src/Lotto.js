class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
        }

        if (new Set(numbers).size !== 6) {
            throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
        }

        numbers.forEach((number) => {
            if (number < 1 || number > 45) {
                throw new Error('[ERROR] 로또 번호는 1부터 45사이여야 합니다.');
            }
        });
    }

    // TODO: 추가 기능 구현
    get numbers() {
        return this.#numbers.sort((a, b) => a - b);
    }
}

export default Lotto;
