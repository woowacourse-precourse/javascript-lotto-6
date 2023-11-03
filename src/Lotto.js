class Lotto {
    #numbers;

    // numbers = [1,2,3,4,5,6]
    constructor(numbers) {
        // # = private
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    // 예외처리
    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
        numbers.forEach((number) => {
            element;
        });
    }

    // TODO: 추가 기능 구현
    getLottoNum() {
        return this.#numbers;
    }
}

export default Lotto;
