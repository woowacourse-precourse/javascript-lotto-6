import {LottoDto} from "./dto/LottoDto.js";

export class Lotto {
    /**
     * 로또 가격이 인상되더라도 상수로 만들었기 때문에
     * PRICE 한번만 바꾸면 된다!
     *
     * 1000이라는 리터럴 그대로 사용하지 않기~
     *
     * @type {number}
     */
    static PRICE = 1000;
    /**
     * @type {number[]}
     */
    #numbers;

    /**
     * @param {number[]} numbers
     * @description - 구매한 로또 한장 + 로또 용지에 적힌 번호 저장
     */

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    get numbers() {
        return this.#numbers
    }

    /**
     *기
     * @param {number[]} numbers
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
     * @description - 추첨 기계에 의해 로또 한 개 추첨하기,
     */
    drawBy(lottoMachine) {

    }

    makeLottoDto() {
        return new LottoDto(this.#numbers)
    }
}
