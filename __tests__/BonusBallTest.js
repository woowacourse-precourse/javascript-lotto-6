import BonusBall from "../src/Model/BonusBall.js";
import Lotto from "../src/Model/Lotto.js";

describe('보너스볼 오류테스트', () => {
    test.each([[102], [-3], [0], [23]])(
        '보너스 번호에서의 예외 오류 사항 발생',
        (input) => {
            // given
            const lotto = new Lotto([22, 34, 32, 12, 24, 38]);

            // then
            expect(() => {
                new BonusBall(input, lotto);
            }).toThrow('[ERROR]');
        }
    );

    test('보너스 번호가 당첨번호 있을 시에 예외발생', () => {
        // given
        const BONUS_NUM = 1;
        const LOTTO_NUMBERS = [BONUS_NUM, 2, 3, 4, 5, 6];
        const lotto = new Lotto(LOTTO_NUMBERS);

        // then
        expect(() => {
            new BonusBall(BONUS_NUM, lotto);
        }).toThrow('[ERROR]');
    });
});