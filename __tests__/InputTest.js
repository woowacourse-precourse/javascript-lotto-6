import validator from "../src/validate/Validator.js";
import ScoreMyLottos from "../src/domain/ScoreMyLottos.js";

describe("입력 예외 처리 테스트", () => {

    test('천원 단위 테스트', () => {
        const MONEY = "1500";
        expect(() => validator.moneyValidator(MONEY)).toThrow("[ERROR]");
    });

    test("보너스 - 숫자가 아닌값 입력 예외처리", () => {
        const INPUT = "10a";
        expect(() => validator.bonusValidator(INPUT)).toThrow("[ERROR]");
    });

    test("보너스 - 범위 예외처리", () => {
        const INPUT = "47";
        expect(() => validator.bonusValidator(INPUT)).toThrow("[ERROR]");
    });

    test("보너스 - 정수가 아닌 값", () => {
        const INPUT = "10.5";
        expect(() => validator.bonusValidator(INPUT)).toThrow("[ERROR]");
    });

    test("보너스 - 보너스는 정답 배열 외의 숫자", () => {
        const LOTTOS = [[1, 2, 3, 4, 5, 6]];
        const ANSWER = [1, 2, 3, 4, 5, 6];
        const BONUS = 6;
        expect(() => {
            new ScoreMyLottos(LOTTOS, ANSWER, BONUS);
        }).toThrow("[ERROR]");
    });
    test("정답 - 범위 외의 숫자", () => {
        const INPUT = "1,2,3,4,5,100";
        expect(() => validator.bonusValidator(INPUT)).toThrow("[ERROR]");
    });

    test("정답 - 숫자가 아닌 값 입력", () => {
        const INPUT = "1,2,3a,4,5,6";
        expect(() => validator.bonusValidator(INPUT)).toThrow("[ERROR]");
    });

    test("정답 - 정수가 아닌값 포함", () => {
        const INPUT = "1,2.2,3,4,5,6";
        expect(() => validator.bonusValidator(INPUT)).toThrow("[ERROR]");
    });
});
