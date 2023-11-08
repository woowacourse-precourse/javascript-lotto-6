import { isValidRangeArr } from "./utils/validateRange";
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
        if (!isValidRangeArr(numbers)) {
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

    calculateLottoResult(winningNumber, bonusNumber, lottoResult) {
        const winningNumArr = winningNumber.split(",").map((el) => Number(el));
        const bonusNumbertoNumber = Number(bonusNumber);
        const winningMatches = winningNumArr.filter((el) =>
            this.#numbers.includes(el)
        ).length;
        if (this.#numbers.includes(bonusNumbertoNumber)) {
            winningMatches += "bonus";
        }
        if (winningMatches > 2 || winningMatches === "5bonus") {
            lottoResult.push(winningMatches);
        }
        return lottoResult;
    }
}

export default Lotto;
