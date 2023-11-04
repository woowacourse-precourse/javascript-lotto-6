import {LottoDto} from "./dto/LottoDto.js";

export class Lotto {
    /**
     * @type
     * @description - 구매한 로또 한장 + 로또 용지에 적힌 번호 저장
     */
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    get numbers() {
        return this.#numbers
    }

    /**
     *
     * @param numbers
     */
    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
        const lottoNums = new Set(numbers)
        if (lottoNums.size !== numbers.length) {
            throw new Error("[ERROR] 로또 번호는 중복 될 수 없습니다.")
        }
    }

    /**
     * @description - 추첨 기계로 로또 한 개 추첨하기
     */
    drawBy(lottoMachine) {

    }

    makeLottoDto() {
        return new LottoDto(this.#numbers)
    }
}
