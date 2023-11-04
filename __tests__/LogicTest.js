import MY_LOTTO from "../src/MyLotto.js";

describe("로또 배열 생성 테스트", () => {

    test("로또 갯수 만큼의 배열 생성", () => {
        const INPUT = 8;
        expect(MY_LOTTO(INPUT).length).toBe(INPUT);
    });
    test("6개의 랜덤한 숫자를 받는가", () => {
        const INPUT = 6; // 6개의 랜덤한 숫자를 받는 것으로 가정합니다.
        const myLotto = MY_LOTTO(INPUT);

        myLotto.forEach((v) => {
            expect(v.length).toBe(INPUT);
        });
    });
});