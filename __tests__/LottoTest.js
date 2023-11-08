import Lotto from '../src/Lotto.js';
import LottoNumber from '../src/domain/LottoNumber.js';

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

  it.each([{ numbers: [1, 2, 3, 4, 5, 6] }, { numbers: [11, 12, 13, 14, 15, 16] }])(
    '`getNumbers` 호출 시 `numbers`를 반환한다.',
    ({ numbers }) => {
      // given
      const lotto = Lotto.of(numbers);

      // when
      const result = lotto.getNumbers();

      // then
      expect(result).toEqual(numbers);
    },
  );

  it.each([
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(1) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(2) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(3) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(4) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(5) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(6) },
  ])(
    '`match(number)` 호출 시 `numbers`에 해당 인자를 보유시 true를 반환한다.',
    ({ numbers, number }) => {
      // given
      const lotto = Lotto.of(numbers);

      // when
      const result = lotto.match(number);

      // then
      expect(result).toBeTruthy();
    },
  );

  it.each([
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(7) },
    { numbers: [1, 2, 3, 4, 5, 6], number: LottoNumber.valueOf(8) },
  ])(
    '`match(number)` 호출 시 `numbers`에 해당 인자를 보유하지 않을시 false를 반환한다.',
    ({ numbers, number }) => {
      // given
      const lotto = Lotto.of(numbers);

      // when
      const result = lotto.match(number);

      // then
      expect(result).toBeFalsy();
    },
  );

  it.each([
    { lottoNumbers: [1, 2, 3, 4, 5, 6], otherLottoNumbers: [1, 2, 3, 4, 5, 6], match: 6 },
    { lottoNumbers: [1, 2, 3, 4, 5, 6], otherLottoNumbers: [1, 2, 3, 4, 5, 16], match: 5 },
    { lottoNumbers: [1, 2, 3, 4, 5, 6], otherLottoNumbers: [1, 2, 3, 4, 15, 16], match: 4 },
    { lottoNumbers: [1, 2, 3, 4, 5, 6], otherLottoNumbers: [1, 2, 3, 14, 15, 16], match: 3 },
    { lottoNumbers: [1, 2, 3, 4, 5, 6], otherLottoNumbers: [1, 2, 13, 14, 15, 16], match: 2 },
    { lottoNumbers: [1, 2, 3, 4, 5, 6], otherLottoNumbers: [1, 12, 13, 14, 15, 16], match: 1 },
    { lottoNumbers: [1, 2, 3, 4, 5, 6], otherLottoNumbers: [11, 12, 13, 14, 15, 16], match: 0 },
  ])(
    '`prepare(lotto)` 호출 시 `lotto`와 몇 개의 숫자가 같은지 확인한다.',
    ({ lottoNumbers, otherLottoNumbers, match }) => {
      // given
      const lotto = Lotto.of(lottoNumbers);
      const otherLotto = Lotto.of(otherLottoNumbers);

      // when
      const result = lotto.prepare(otherLotto);

      // then
      expect(match).toBe(result);
    },
  );
});
