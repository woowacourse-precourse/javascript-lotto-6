import Bonus from '../../src/raffle/Bonus.js';
import {
  BonusTypeError,
  BonusRangeError,
} from '../../src/error/CustomErrors.js';

describe('raffle/bonus : 생성 balance 유효성 검사 테스트', () => {
  test.each(['-1', '3.14', '9.81', 'f', '다섯', ' '])(
    '보너스는 자연수로 이루어져야 한다. 그렇지 않으면 BonusTypeError를 반환한다.',
    input => {
      expect(() => new Bonus(input)).toThrowError(BonusTypeError);
    },
  );

  test.each(['0', '46', '100', '9999'])(
    '보너스는 1 이상 45 이하여야 한다. 그렇지 않으면 BonusRangeError를 반환한다.',
    input => {
      expect(() => new Bonus(input)).toThrowError(BonusRangeError);
    },
  );
});

describe('raffle/bonus : bonus 반환값 테스트', () => {
  test.each('bonus 생성값과 get 반환값이 같아야 한다.', () => {
    const bonus = new Bonus('7');
    const result = bonus.get();

    expect(result).toEqual('7');
  });
});
