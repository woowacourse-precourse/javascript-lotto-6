import BonusNumberModel from '../src/models/BonusNumberModel';
import CorrectNumbersModel from '../src/models/CorrectNumbersModel';
import ERROR_MESSAGES from '../src/constants/errorMessage';

describe('보너스 넘버 모델 테스트', () => {
  test('보너스 넘버가 숫자가 아닐경우 예외', () => {
    expect(() => {
      new BonusNumberModel('a', new CorrectNumbersModel([1, 2, 3, 4, 5, 6]));
    }).toThrow(`${ERROR_MESSAGES.error} ${ERROR_MESSAGES.numberTypeError}`);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('보너스 넘버가 정답번호와 중복일경우 예외', () => {
    expect(() => {
      new BonusNumberModel(1, new CorrectNumbersModel([1, 2, 3, 4, 5, 6]));
    }).toThrow(`${ERROR_MESSAGES.error} ${ERROR_MESSAGES.isSameLottoNumber}`);
  });
  test('보너스 넘버가 1~45 범위를 벗어나면 예외', () => {
    expect(() => {
      new BonusNumberModel(0, new CorrectNumbersModel([1, 2, 3, 4, 5, 6]));
    }).toThrow(`${ERROR_MESSAGES.error} ${ERROR_MESSAGES.numberOutOfRange}`);
    expect(() => {
      new BonusNumberModel(46, new CorrectNumbersModel([1, 2, 3, 4, 5, 6]));
    }).toThrow(`${ERROR_MESSAGES.error} ${ERROR_MESSAGES.numberOutOfRange}`);
  });
});
