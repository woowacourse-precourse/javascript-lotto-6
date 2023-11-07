import isValidRange from "./utils/validateRange";
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
        if (!isValidRange(numbers)) {
            throw new Error("[ERROR] 로또 번호는 1~45의 숫자여야 합니다.");
        }
        const isLottoNumberUnique = numbers.every(
            (el, idx, arr) => arr.indexOf(el) === idx
        );
        if (!isLottoNumberUnique) {
            throw new Error("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.");
        }
    }

    printLottoNumber() {
        return this.#numbers;
    }

}

export default Lotto;
