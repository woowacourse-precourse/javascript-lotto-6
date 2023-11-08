import App from "../src/App.js";

describe(' 로또 생성 기능 테스트',() => {
    const app = new App()

    test("[정상] 일반적인 숫자가 들어오면, 정상적으로 작동한다 입력값 ", () => {
        expect(
            app.generatingLottoNumbers(1)[0].length
        ).toBe(6)
    })
})