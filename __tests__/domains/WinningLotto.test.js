import WinningLotto from '../../src/domains/WinningLotto'
import { LottoDuplicatedError, LottoLengthError, LottoRangeError, LottoTypeError, BonusTypeError, BonusRangeError, BonusIncludedError } from '../../src/error/CustomErrors.js';
import Lotto from '../../src/domains/Lotto.js';

describe('WinningLotto - 당첨 번호 유효성 검사 테스트', () => {
  const winning = new WinningLotto();

  test.each([
    '0,1,2,3,4,5',
    '1,2,3,4,5,1024',
    '45,46,47,48,49,50',
    '100,1,200,2,300,3',
  ])('당첨 번호는 1 이상 45 이하여야 한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoRangeError);
  });

  test.each([
    '일,2,3,4,5,6',
    'a,b,c,d,e,f',
    '-1,0,3.14,5,6,7'
  ])('당첨 번호는 자연수로 이루어져야 한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoTypeError);
  });

  test.each([
    '1,2,3',
    '1',
    '1,2,3,4,5,6,7',
  ])('당첨 번호는 6개여야 한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoLengthError);
  });

  test.each([
    '1,1,3,4,5,6',
    '30,1,3,2,30,40',
  ])('당첨 번호에 중복되는 숫자는 없어야 한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoDuplicatedError);
  });
});

describe('WinningLotto - 보너스 번호 유효성 검사 테스트', () => {
  const winning = new WinningLotto();

  beforeEach(() => {
    winning.setNumbers('1,2,3,4,5,6');
  });

  test.each([
    '-1', '3.14', '9.81', 'f', '다섯', ' ',
  ])('보너스는 자연수로 이루어져야 한다.', (bonus) => {
    const result = () => winning.setBonus(bonus);

    expect(result).toThrowError(BonusTypeError);
  });

  test.each([
    '0', '46', '100', '9999',
  ])('보너스는 1 이상 45 이하여야 한다.', (bonus) => {
    const result = () => winning.setBonus(bonus);

    expect(result).toThrowError(BonusRangeError);
  });

  test.each([
    '1', '2', '3', '4', '5', '6'
  ])('보너스는 당첨번호와 중복되지 않아야 한다.', (bonus) => {
    const result = () => winning.setBonus(bonus);

    expect(result).toThrowError(BonusIncludedError);
  });
});

describe('WinningLotto - 로또와 담첨번호 및 보너스 결과 테스트', () => {
  const winning = new WinningLotto();

  winning.setNumbers('1,2,3,4,5,6');
  winning.setBonus('7');

  test('lotto와 당첨번호가 모두 일치하는 경우 6을 반환한다.', () => {
    const lotto = new Lotto([1,2,3,4,5,6])
    const result = winning.getMatchWithNumbers(lotto.getNumbers());

    expect(result).toEqual(6);
  });

  test.each([
    [[1,2,3,10,20,30]],
    [[1,10,20,3,5,30]],
  ])('lotto와 당첨번호가 3개 일치하는 경우 3을 반환한다.', (input) => {
    const lotto = new Lotto(input)
    const result = winning.getMatchWithNumbers(lotto.getNumbers());

    expect(result).toEqual(3);
  });

  test.each([
    [[10,11,12,13,14,15]],
    [[20,21,22,23,24,25]],
  ])('lotto와 당첨번호가 일치하지 않는 경우 0을 반환한다.', (input) => {
    const lotto = new Lotto(input)
    const result = winning.getMatchWithNumbers(lotto.getNumbers());

    expect(result).toEqual(0);
  });

});
