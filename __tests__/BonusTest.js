import Bonus from '../src/model/Bonus.js';
import { ERROR } from '../src/util/constant.js';

describe('보너스 클래스 테스트', () => {
  test('정수가 아닌 값을 입력한 경우', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const inputList = ['10.0', 'a', '!', ' '];

    inputList.forEach(input => {
      expect(() => {
        new Bonus(input, lottoNumbers);
      }).toThrow(ERROR.notNumberic);
    });
  });

  test('입력값이 1~45사이의 수가 아닌 경우 예외 발생', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const inputList = ['', '0', '46'];

    inputList.forEach(input => {
      expect(() => {
        new Bonus(input, lottoNumbers);
      }).toThrow(ERROR.rangeOverInput);
    });
  });

  test('로또 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const inputList = [1, 2, 3, 4, 5, 6];

    inputList.forEach(input => {
      expect(() => {
        new Bonus(input, lottoNumbers);
      }).toThrow(ERROR.sameNumber);
    });
  });
});
