import Bonus from '../src/model/Bonus.js';

describe("보너스 클래스 테스트", () => {
    const errorMessage = "[ERROR]";
    const array = [1, 2, 3, 4, 5, 6];

    test("숫자가 아닌 문자열이 입력되면 예외를 발생한다.", () => {
        const bonus = '100q';
        expect(() => {
            Bonus.validateCorrectFormat(bonus, array);
        }).toThrow(errorMessage);
    });

    test("보너스 번호에 1 ~ 45까지의 숫자가 아닌 번호가 오면 예외가 발생한다.", () => {
        const bonus = ['0', '46', '47'];

        bonus.forEach(num => {
            expect(() => {
                Bonus.validateCorrectFormat(num, array)
            }).toThrow(errorMessage);
        });
    });

    test("로또 번호와 중복된 숫자가 보너스 번호에 입력된다면 예외가 발생한다.", () => {
        const bonus = '6';

        expect(() => {
            Bonus.validateCorrectFormat(bonus, array);
        }).toThrow(errorMessage);
    });

    test("올바른 보너스 번호가 입력된다면 통과된다.", () => {
        const bonus = '7';

        expect(Bonus.validateCorrectFormat(bonus, array)).toBe(bonus);
    });
});