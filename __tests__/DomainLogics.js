import App from "../src/App.js";

describe("금액 테스트 checkInputPurchasedAmount()", () => {
    const app = new App();
    test("1000 => O", () => {
        expect(() => app.checkInputPurchasedAmount("1000")).not.toThrow();
    })
    test("20000 => O", () => {
        expect(() => app.checkInputPurchasedAmount("200000")).not.toThrow();
    })
    test("1000j => error", () => {
        expect(() => app.checkInputPurchasedAmount("1000j")).toThrow();
    })
    test("5500 => error", () => {
        expect(() => app.checkInputPurchasedAmount("5500")).toThrow();
    })
})
describe(' 로또 생성 기능 테스트 generatingLottoNumbers()',() => {
    const app = new App()
    test("[정상] 일반적인 숫자가 들어오면, 정상적으로 작동한다 입력값 ", () => {
        expect(
            app.generatingLottoNumbers(1)[0].length
        ).toBe(6)
    })
})

describe("로또 당첨 번호 입력 검증 테스트 isInputWinningNumberError()", () => {
    const app = new App();

    test("[정상] 1,2,3,4,5,6 => error : 정상", () => {
        expect(() => app.isInputWinningNumberError("1,2,3,4,5,6")).not.toThrow()
    })
    test("[예외] 1,2,3,4,5,6,7 => error : 초과입력", () => {
        expect(() => app.isInputWinningNumberError("1,2,3,4,5,6,7,8")).toThrow()
    })
    test("[예외] 1,2,3,4,5,5 => error : 중복숫자", () => {
        expect(() => app.isInputWinningNumberError("1,2,3,4,5,5")).toThrow();
    })
    test("[예외] 1,2,3,4,5,46 => error : 숫자범위 초과", () => {
        expect(() => app.isInputWinningNumberError("1,2,3,4,5,46")).toThrow();
    })
})

describe("로또 보너스 번호 입력 검증 테스트 isInputWinningBonusNumberError()", () => {
    const app = new App();
    test("[정상] 7 => error : 정상", () => {
        expect(() => app.isInputWinningBonusNumberError("1,2,3,4,5,6","7")).not.toThrow()
    })
    test("[예외] 6,7] => error : 초과입력", () => {
        expect(() => app.isInputWinningBonusNumberError("1,2,3,4,5,6","7,8")).toThrow()
    })
    test("[예외] 당첨숫자와 중복입력 => error : 중복숫자", () => {
        expect(() => app.isInputWinningBonusNumberError("1,2,3,4,5,7","7")).toThrow();
    })
    test("[예외] [1,2,3,4,5,46] => error : 숫자범위 초과", () => {
        expect(() => app.isInputWinningBonusNumberError("1,2,3,4,5,6","46")).toThrow();
    })
})

describe("로또 당첨여부 확인하는 기능 함수", () => {
    const app = new App()
    test("[정상] 당첨번호와 구매한 로또번호 비교 기능 단위테스트 checkingWinningLottoNumber ",() => {
        expect(() => app.checkingWinningLottoNumber([1,2,3,4,5,6,7],[[1,2,3,4,5,6],[1,2,3,4,5,7]])).not.toThrow()
    })
    test("[정상] 당첨번호와 구매한 로또번호 비교 기능 단위테스트 checkingWinningLottoNumber ",() => {
        expect(() => app.checkingWinningLottoNumber([1,23,3,45,5,6,7],[[1,23,3,4,5,6],[1,2,3,45,5,7]])).not.toThrow()
    })
})