import Lotto from '../src/Lotto.js';
import { ERROR } from '../src/util/constant.js';

describe('로또 클래스 테스트', () => {
  test('정수가 아닌 값을 입력한 경우', () => {
    const inputList = [
      ['     ', '1 ', '2 ', '3', '4', '5'],
      ['5.0', '6.0', '7.0', '8.0', '9.0', '10.2'],
      ['a', '2', '3', '4', '5', '6'],
      ['1 ', '2 ', '3', '4', '5', '6'],
      ['가', '1', '2', '3', '4', '5'],
    ];

    inputList.forEach(input => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.notNumberic);
    });
  });

  test('입력값이 6개가 아닌 경우 예외 발생', () => {
    const inputList = [[''], [1, 2, 3, 4, 5, 6, 7], ['1', '2', '3', '4'], ['1', '2', '3', '4', '5', '6', '7']];

    inputList.forEach(input => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.notSixNumber);
    });
  });

  test('입력값이 1~45사이의 수가 아닌 경우 예외 발생', () => {
    const inputList = [
      ['', '', '', '', '', ''],
      ['0', '1', '2', '3', '4', '5'],
      ['46', '43', '22', '10', '9', '8'],
    ];

    inputList.forEach(input => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.rangeOverInput);
    });
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const inputList = [
      [1, 2, 3, 4, 5, 5],
      ['1', '1', '2', '3', '4', '5'],
      ['40', '40', '30', '20', '10', '10'],
    ];

    inputList.forEach(input => {
      expect(() => {
        new Lotto(input);
      }).toThrow(ERROR.sameNumber);
    });
  });
});
