import {numberCheck} from "../src/validation.js";
import {LOTTO_NUMBER} from "../src/constants/policy.js";
import {MESSAGE} from "../src/constants/messages.js";

describe("유효성 검사 테스트", () => {
    test("입력받은 숫자가 정수면 성공한다.", () => {
        const value = 30
        numberCheck.number(value)
    })

    test("입력받은 숫자가 정수가 아니라면 실패한다.", () => {
        const value = 30.3
        expect(() => numberCheck.number(value, MESSAGE.ERROR.number)).toThrow(MESSAGE.ERROR.number)
    })

    test("입력받은 숫자가 해당 단위라면 성공한다.", () => {
        const value = 30000
        const unit = 1000
        numberCheck.unit(value, unit)
    })

    test("입력받은 숫자가 해당 단위가 아니라면 실패한다.", () => {
        const value = 30100
        const unit = 1000
        expect(() => numberCheck.unit(value, unit, MESSAGE.ERROR.unit)).toThrow(MESSAGE.ERROR.unit)
    })

    test("로또 범위의 숫자에 포함되지 않으면 제외한다.", () => {
        const value = 48
        expect(() => numberCheck.rangeCheck(value, LOTTO_NUMBER.startNumber, LOTTO_NUMBER.endNumber, MESSAGE.ERROR.lottoRange)).toThrow(MESSAGE.ERROR.lottoRange)
    })

    test("로또 범위의 숫자에 포함되지 않으면 제외한다.", () => {
        const value = 0
        expect(() => numberCheck.rangeCheck(value, LOTTO_NUMBER.startNumber, LOTTO_NUMBER.endNumber, MESSAGE.ERROR.lottoRange)).toThrow(MESSAGE.ERROR.lottoRange)
    })

    test("로또 범위의 숫자에 포함되면 성공한다.", () => {
        const value = 44
        numberCheck.rangeCheck(value, LOTTO_NUMBER.startNumber, LOTTO_NUMBER.endNumber)
    })
})