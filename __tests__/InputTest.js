import InputView from '../src/view/InputView.js';

describe('구입금액 입력 테스트', () => {
  test('숫자를 입력받아야합니다.', () => {
    expect(() => {
      InputView.validateMoney('asdfasdf');
    }).toThrow('[ERROR]');
  });
  test('정수를 입력받아야합니다.', () => {
    expect(() => {
      InputView.validateMoney('1000.5');
    }).toThrow('[ERROR]');
  });
  test('입력 금액이 천원 단위여야 합니다.', () => {
    expect(() => {
      InputView.validateMoney('1500');
    }).toThrow('[ERROR]');
  });
  test('로또를 구매할 수 없습니다.', () => {
    expect(() => {
      InputView.validateMoney('500');
    }).toThrow('[ERROR]');
  });
});

describe('구입금액 입력 테스트', () => {
  test('로또 번호는 6개 입니다.', () => {
    expect(() => {
      InputView.validateLottoNumbers('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });
  test('중복된 수가 있습니다.', () => {
    expect(() => {
      InputView.validateLottoNumbers('1,2,3,4,5,4');
    }).toThrow('[ERROR]');
  });
  test('1~45사이 숫자 여야 합니다.', () => {
    expect(() => {
      InputView.validateLottoNumbers('1,2,3,4,5,110');
    }).toThrow('[ERROR]');
  });
  test('정수만 입력되어야 합니다.', () => {
    expect(() => {
      InputView.validateLottoNumbers('1,2,3,4,5,6.4');
    }).toThrow('[ERROR]');
  });
});
describe('구입금액 입력 테스트', () => {
  test('1~45사이 숫자 여야 합니다.', () => {
    expect(() => {
      InputView.validateBonusNumber('110');
    }).toThrow('[ERROR]');
  });
  test('정수만 입력되어야 합니다.', () => {
    expect(() => {
      InputView.validateBonusNumber('ㄱ');
    }).toThrow('[ERROR]');
  });
});
