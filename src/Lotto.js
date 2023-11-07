class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
        const invalidLottoNumberArr = numbers.filter((el) => el > 45 || el < 1);
        if (invalidLottoNumberArr.length !== 0) {
            throw new Error("[ERROR] 로또 번호는 1~45의 숫자여야 합니다.");
        }
        const isLottoNumberUnique = numbers.every(
            (el, idx, arr) => arr.indexOf(el) === idx
        );
        if (!isLottoNumberUnique) {
            throw new Error("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.");
        }
    }
}

export default Lotto;
