import WinningLotto from '../../src/domains/WinningLotto'
import { LottoDuplicatedError, LottoLengthError, LottoRangeError, LottoTypeError } from '../../src/error/Errors';

describe('WinningLotto - 당첨 번호 유효성 검사 테스트', () => {
  const winning = new WinningLotto();

  test.each([
    '0,1,2,3,4,5',
    '1,2,3,4,5,1024',
    '45,46,47,48,49,50',
    '100,1,200,2,300,3',
  ])('당첨 번호는 1이상 45 이하여야 한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoRangeError);
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
    '일,2,3,4,5,6',
    'a,b,c,d,e,f',
    '-1,0,3.14,5,6,7'
  ])('당첨 번호는 숫자로 이루어져야 한다.', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoTypeError);
  });

  test.each([
    '1,1,3,4,5,6',
    '30,1,3,2,30,40',
  ])('당첨 번호에 중복되는 숫자는 없어야 한다..', (numbers) => {
    const result = () => winning.setNumbers(numbers);

    expect(result).toThrowError(LottoDuplicatedError);
  });
});
