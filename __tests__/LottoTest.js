import Lotto from '../src/Lotto.js';

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

  test('로또 번호가 1 ~ 45 에 포함되지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3.1, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 6개가 같을 때', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.numberComparison(lottoNumber, bonusNumber);

    expect(result).toEqual('six');
  });

  test('로또 번호가 5개와 보너스번호가 같을 때', () => {
    const result = 5;
    const lottoNumber = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const resultComparison = lotto.resultnumberComparison(result, lottoNumber, bonusNumber);

    expect(resultComparison).toEqual('fiveAndBonus');
  });

  test('로또 번호가 5개가 같을 때', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 45]);
    const result = lotto.numberComparison(lottoNumber, bonusNumber);

    expect(result).toEqual('five');
  });

  test('로또 번호가 4개가 같을 때', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 2, 3, 4, 35, 45]);
    const result = lotto.numberComparison(lottoNumber, bonusNumber);

    expect(result).toEqual('four');
  });

  test('로또 번호가 3개가 같을 때 리턴값은 없습니다.', () => {
    const lottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lotto = new Lotto([1, 28, 3, 44, 35, 45]);
    const result = lotto.numberComparison(lottoNumber, bonusNumber);

    expect(result).toEqual();
  });

  test('로또번호와 보너스번호가 서로다르면 false.', () => {
    const bonusNumber = 6;
    const lotto = new Lotto([1, 28, 3, 44, 35, 45]);
    const result = lotto.checkSameNumber(bonusNumber);

    expect(result).toBeFalsy();
  });

  test('로또번호와 보너스번호가 같으면 true ', () => {
    const bonusNumber = 6;
    const lotto = new Lotto([6, 28, 3, 44, 35, 45]);
    const result = lotto.checkSameNumber(bonusNumber);

    expect(result).toBeTruthy();
  });

  test('보너스번호는 문자열로 비교되면 안됩니다.', () => {
    const bonusNumber = '6';
    const lotto = new Lotto([6, 28, 3, 44, 35, 45]);
    const result = lotto.checkSameNumber(bonusNumber);

    expect(result).toBeFalsy();
  });
});
