import Validator from '../src/model/Validator.js';
import InputView from '../src/view/InputView.js';
import { Console } from '@woowacourse/mission-utils';
import { ERROR } from '../src/util/constant.js';

describe('로또 금액 유효성 테스트', () => {
  test('로또 금액을 입력하지 않은 경우 예외 발생', () => {
    const moneyInput = ['', ' ', '     '];

    moneyInput.forEach(money => {
      expect(() => {
        Validator.moneyCheck(money);
      }).toThrow(ERROR.emptyValue);
    });
  });

  test('숫자가 아닌 문자를 입력한 경우(실수, 음수 포함)', () => {
    const moneyInput = ['1000abc', '1 000', '1000.0', '-1000'];

    moneyInput.forEach(money => {
      expect(() => {
        Validator.moneyCheck(money);
      }).toThrow(ERROR.notNumberic);
    });
  });

  test('1000원 단위가 아닌 경우', () => {
    const moneyInput = ['1005', '8765', '1233'];

    moneyInput.forEach(money => {
      expect(() => {
        Validator.moneyCheck(money);
      }).toThrow(ERROR.notDivisibleMoney);
    });
  });

  test('1000원 미만을 입력할 경우', () => {
    const moneyInput = '0';

    expect(() => {
      Validator.moneyCheck(moneyInput);
    }).toThrow(ERROR.underThousandMoney);
  });
});

describe('당첨 번호 유효성 테스트', () => {
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
        Validator.lottoNumberList(input);
      }).toThrow(ERROR.notNumberic);
    });
  });

  test('입력값이 6개가 아닌 경우 예외 발생', () => {
    const inputList = [[''], ['1', '2', '3', '4'], ['1', '2', '3', '4', '5', '6', '7']];

    inputList.forEach(input => {
      expect(() => {
        Validator.lottoNumberList(input);
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
        Validator.lottoNumberList(input);
      }).toThrow(ERROR.rangeOverInput);
    });
  });

  test('중복되는 값을 입력할 경우 예외 발생', () => {
    const inputList = [
      ['1', '1', '2', '3', '4', '5'],
      ['40', '40', '30', '20', '10', '10'],
    ];

    inputList.forEach(input => {
      expect(() => {
        Validator.lottoNumberList(input);
      }).toThrow(ERROR.sameNumber);
    });
  });
});
