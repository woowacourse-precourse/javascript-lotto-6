import Validator from '../model/Validator.js';

describe('검증기 테스트', () => {
  const purchaseAmountTestCases = [
    { input: '오천원', errorMessage: '[ERROR] 숫자가 잘못된 형식입니다.' },
    {
      input: '5500',
      errorMessage: '[ERROR] 구입 금액은 1000원 단위의 수만 가능합니다.',
    },
  ];

  const bonusNumberTestCases = [
    { input: '구', errorMessage: '[ERROR] 숫자가 잘못된 형식입니다.' },
    {
      input: '46',
      errorMessage: '[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다.',
    },
  ];

  purchaseAmountTestCases.forEach((testCase) => {
    test('구입 금액이 1000 단위로 나누어지는 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        Validator.throwPurchaseAmountError(testCase.input);
      }).toThrow(testCase.errorMessage);
    });
  });

  bonusNumberTestCases.forEach((testCase) => {
    test('보너스 번호가 1부터 45사이의 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        Validator.throwBonusNumberError(testCase.input);
      }).toThrow(testCase.errorMessage);
    });
  });

  test('당첨 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      Validator.throwWinningNumbersError('육,십이,18,27,삼십,40');
    }).toThrow('[ERROR] 숫자가 잘못된 형식입니다.');
  });

  test('보너스 번호가 당첨 번호와 중복되는 번호면 예외가 발생한다.', () => {
    expect(() => {
      Validator.compareWinningAndBonusNumbers([1, 2, 3, 4, 5, 6], 6);
    }).toThrow('[ERROR] 당첨 번호와 같은 숫자가 있습니다.');
  });
});
