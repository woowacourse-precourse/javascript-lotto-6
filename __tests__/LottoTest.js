import Lotto from "../src/Model/Lotto.js";
import BonusNumber from "../src/Model/BonusNumber.js";
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

    test("로또 번호에 [1-45]범위의 숫자가 아닌 것이 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, "asd", 5]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호와 보너스 번호가 겹치면 예외가 발생한다.", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonus = new BonusNumber(6);
            lotto.validateBonusNumber(bonus);
        }).toThrow("[ERROR]");
    });

    test("보너스 번호가 [1-45]범위의 숫자가 아니면 예외가 발생한다 (범위 밖 숫자) .", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonus = new BonusNumber(0);
            lotto.validateBonusNumber(bonus);
        }).toThrow("[ERROR]");
    });

    test("보너스 번호가 [1-45]범위의 숫자가 아니면 예외가 발생한다 (문자열) .", () => {
        expect(() => {
            const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
            const bonus = new BonusNumber("sd");
            lotto.validateBonusNumber(bonus);
        }).toThrow("[ERROR]");
    });


});
