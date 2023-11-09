import Lotto from '../src/Lotto.js';
import PRIZE from '../src/constants/Prize.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6']);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '']);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 1부터 45까지의 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -1]);
    }).toThrow('[ERROR]');
  });
});

describe('발행한 로또 번호와 추첨한 로또 번호 일치에 따른 상금 반환 테스트', () => {
  let lotto;
  beforeEach(() => {
    lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test('로또 번호 6개 일치', () => {
    const prize = lotto.compareLotto([1, 2, 3, 4, 5, 6], 7);
    expect(prize).toBe(PRIZE.six);
  });

  test('로또 번호 5개 일치', () => {
    const prize = lotto.compareLotto([1, 2, 3, 4, 5, 8], 7);
    expect(prize).toBe(PRIZE.five);
  });

  test('로또 번호 5개, 보너스번호 일치', () => {
    const prize = lotto.compareLotto([1, 2, 3, 4, 5, 8], 6);
    expect(prize).toBe(PRIZE.fivePlus);
  });

  test('로또 번호 4개 일치', () => {
    const prize = lotto.compareLotto([1, 2, 3, 4, 8, 9], 7);
    expect(prize).toBe(PRIZE.four);
  });

  test('로또 번호 3개 일치', () => {
    const prize = lotto.compareLotto([1, 2, 3, 8, 9, 10], 7);
    expect(prize).toBe(PRIZE.three);
  });
});
