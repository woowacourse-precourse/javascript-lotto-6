import WinningLotto from '../../src/domains/WinningLotto'
import { LottoDuplicatedError, LottoLengthError, LottoRangeError, LottoTypeError, BonusTypeError, BonusRangeError, BonusIncludedError } from '../../src/error/CustomErrors.js';

const INPUT_NUMBERS = '1,2,3,4,5,6';
const INPUT_BONUS = '7';
const RESULT_NUMBERS = [1,2,3,4,5,6];
const RESULT_BONUS = 7;

describe('WinningLotto - setNumbers 메소드 : 당첨 번호 유효성 검사 테스트', () => {
  const winning = new WinningLotto();

  test.each([
    '0,1,2,3,4,5',
    '1,2,3,4,5,1024',
    '45,46,47,48,49,50',
    '100,1,200,2,300,3',
  ])('당첨 번호는 1 이상 45 이하여야 한다. 그렇지 않으면 LottoRangeError를 반환한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoRangeError);
  });

  test.each([
    '일,2,3,4,5,6',
    'a,b,c,d,e,f',
    '-1,0,3.14,5,6,7'
  ])('당첨 번호는 자연수로 이루어져야 한다. 그렇지 않으면 LottoTypeError를 반환한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoTypeError);
  });

  test.each([
    '1,2,3',
    '1',
    '1,2,3,4,5,6,7',
  ])('당첨 번호는 6개여야 한다. 그렇지 않으면 LottoLengthError를 반환한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoLengthError);
  });

  test.each([
    '1,1,3,4,5,6',
    '30,1,3,2,30,40',
  ])('당첨 번호에 중복되는 숫자는 없어야 한다. 그렇지 않으면 LottoDuplicatedError를 반환한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoDuplicatedError);
  });
});

describe('WinningLotto - setBonus 메소드 : 보너스 번호 유효성 검사 테스트', () => {
  const winning = new WinningLotto();
  winning.setNumbers(INPUT_NUMBERS);

  test.each([
    '-1', '3.14', '9.81', 'f', '다섯', ' ',
  ])('보너스는 자연수로 이루어져야 한다. 그렇지 않으면 BonusTypeError를 반환한다.', (bonus) => {
    const result = () => winning.setBonus(bonus);

    expect(result).toThrowError(BonusTypeError);
  });

  test.each([
    '0', '46', '100', '9999',
  ])('보너스는 1 이상 45 이하여야 한다. 그렇지 않으면 BonusRangeError를 반환한다.', (bonus) => {
    const result = () => winning.setBonus(bonus);

    expect(result).toThrowError(BonusRangeError);
  });

  test.each([
    '1', '2', '3', '4', '5', '6'
  ])('보너스는 당첨번호와 중복되지 않아야 한다. 그렇지 않으면 BonusIncludedError를 반환한다.', (bonus) => {
    const result = () => winning.setBonus(bonus);

    expect(result).toThrowError(BonusIncludedError);
  });
});

describe('WinningLotto - getNumbers, getBonus 메소드 : 당첨 번호 및 보너스 번호 반환값 테스트', () => {
  const winning = new WinningLotto();
  winning.setNumbers(INPUT_NUMBERS);
  winning.setBonus(INPUT_BONUS);

  test('설정한 당첨 번호와 반환한 당첨번호가 같아야 한다.', () => {
    const result = winning.getNumbers();

    expect(result).toEqual(RESULT_NUMBERS);
  });

  test('설정한 보너스 번호와 반환한 보너스가 같아야 한다.', () => {
    const result = winning.getBonus();

    expect(result).toEqual(7);
  });
});



