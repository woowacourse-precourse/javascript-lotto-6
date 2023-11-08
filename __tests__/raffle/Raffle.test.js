import { BonusIncludedError } from '../../src/error/CustomErrors.js';
import Raffle from '../../src/raffle/Raffle.js';

describe('raffle : 생성 테스트', () => {
  test('예외 상황이 아닌 경우 오류를 반환하지 않아야 한다.', () => {
    expect(() => new Raffle('1,2,3,4,5,6')).not.toThrow();
  });

  test.each([1, 2, 3, 4, 5, 6])(
    '보너스는 당첨번호와 중복되지 않아야 한다. 그렇지 않으면 BonusIncludedError를 반환한다.',
    input => {
      const raffle = new Raffle('1,2,3,4,5,6');
      const result = () => raffle.addBonus(input);

      expect(result).toThrowError(BonusIncludedError);
    },
  );
});
