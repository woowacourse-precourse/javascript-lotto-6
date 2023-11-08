import Lotto from "../src/Model/Lotto.js";
import Winning from "../src/Model/Winning.js";
import BonusBall from "../src/Model/BonusBall.js";

describe('보너스 번호 매칭 여부와 당첨번호 갯수 표시 테스트', () => {
    test('생성된 로또번호와 입력된 번호 비교후 겹치는 번호 수와 보너스 숫자 표시', () => {
        // given
        const WINNING_LOTTO = new Lotto([1, 2, 3, 4, 5, 6]);
        const BONUS = new BonusBall(33, WINNING_LOTTO);

        // when
        const lotto = new Lotto([1, 2, 3, 11, 22, 33]);
        const winningLotto = new Winning(WINNING_LOTTO, BONUS);

        // then
        expect(winningLotto.compareWith(lotto)).toStrictEqual([3, true]);
    });


});