import Lotto from '../src/Lotto';
import { LOTTO_RANKS } from '../src/constants/lotto';

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

  test('로또 번호가 1 ~ 45 사이의 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([100, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 문자가 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 'a', 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호를 메시지(string)로 전달한다.', () => {
    // given
    const TEST_LOTTO_NUMBERS = [1, 5, 11, 17, 19, 20];
    const EXPECTED_MESSAGE = '[1, 5, 11, 17, 19, 20]';

    // when
    const lotto = new Lotto(TEST_LOTTO_NUMBERS);

    // then
    expect(lotto.getNumbers()).toEqual(EXPECTED_MESSAGE);
    expect(typeof lotto.getNumbers()).toBe('string');
  });

  test('당첨 번호와 5개 일치하고 보너스 번호는 일치하지 않을 경우 3등을 반환한다.', () => {
    // given
    const TEST_LOTTO_NUMBERS = [1, 5, 11, 17, 19, 20];
    const WINNING_NUMBERS = [1, 5, 11, 17, 19, 25];
    const BONUS_NUMBER = 35;

    // when
    const lotto = new Lotto(TEST_LOTTO_NUMBERS);
    const lottoRank = lotto.getLottoRank(WINNING_NUMBERS, BONUS_NUMBER);

    // then
    expect(lottoRank).toBe(LOTTO_RANKS.third);
  });

  test('당첨 번호와 5개 일치하고 보너스 번호도 일치하는 경우 2등을 반환한다.', () => {
    // given
    const TEST_LOTTO_NUMBERS = [1, 5, 11, 17, 19, 35];
    const WINNING_NUMBERS = [1, 5, 11, 17, 19, 25];
    const BONUS_NUMBER = 35;

    // when
    const lotto = new Lotto(TEST_LOTTO_NUMBERS);
    const lottoRank = lotto.getLottoRank(WINNING_NUMBERS, BONUS_NUMBER);

    // then
    expect(lottoRank).toBe(LOTTO_RANKS.second);
  });

  test('일치하는 당첨 번호가 없을 경우 "nothing"을 반환한다.', () => {
    const TEST_LOTTO_NUMBERS = [1, 5, 11, 17, 19, 35];
    const WINNING_NUMBERS = [12, 14, 16, 18, 20, 22];
    const BONUS_NUMBER = 24;

    // when
    const lotto = new Lotto(TEST_LOTTO_NUMBERS);
    const lottoRank = lotto.getLottoRank(WINNING_NUMBERS, BONUS_NUMBER);

    // then
    expect(lottoRank).toBe(LOTTO_RANKS.nothing);
  });
});
