import ERROR_MESSAGES from '../src/constants/errorMessage';
import CorrectNumbersModel from '../src/models/CorrectNumbersModel';

describe('정답 로또 번호 클래스 테스트', () => {
  test.each([[[1, 2, 3, 4, 5, 6, 7]], [[1]], [[]]])(
    '로또 번호의 개수가 6개가 아니면 예외가 발생한다.',
    (numbers) =>
      expect(() => new CorrectNumbersModel(numbers)).toThrow(
        `${ERROR_MESSAGES.error} ${ERROR_MESSAGES.numberOverLength}`
      )
  );
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new CorrectNumbersModel([1, 2, 3, 4, 5, 5]);
    }).toThrow(`${ERROR_MESSAGES.error} ${ERROR_MESSAGES.isSameLottoNumber}`);
  });
  test('로또 번호에 1~45 외 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new CorrectNumbersModel([1, 2, 3, 4, 5, 55]);
    }).toThrow(`${ERROR_MESSAGES.error} ${ERROR_MESSAGES.numberOutOfRange}`);
  });
  test('로또 번호에 잘못된 타입의 값이 있을경우 에러가 발생한다.', () => {
    expect(() => {
      new CorrectNumbersModel([1, 2, 3, 4, 5, 'a']);
    }).toThrow(`${ERROR_MESSAGES.error} ${ERROR_MESSAGES.numberTypeError}`);
  });
});
