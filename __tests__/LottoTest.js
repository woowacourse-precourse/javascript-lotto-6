import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호에 45를 초과하는 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 48, 3, 4, 5, 6]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호에 1을 미만하는 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([0, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호를 출력할 수 있어야 한다.", async () => {
        const input = [1, 2, 3, 4, 5, 6];
        const result = [1, 2, 3, 4, 5, 6];

        const lotto = new Lotto(input);

        await expect(lotto.printLottoNumber()).toEqual(result);
    });

    test("로또 당첨 결과가 든 배열을 출력할 수 있어야 한다.", async () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        const winningNumber = "1,2,3,4,5,6";
        const bonusNumber = "7";
        const lottoResult = ["5bonus"];
        const result = ["5bonus", 6];

        await expect(
            lotto.calculateLotto(winningNumber, bonusNumber, lottoResult)
        ).toEqual(result);
    });
});
