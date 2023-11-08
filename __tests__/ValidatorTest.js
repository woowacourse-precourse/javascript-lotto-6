import WinningNumbersValidator from '../src/Validator/WinningNumbersValidator/index.js';
import Validator from '../src/Validator/index.js';
import BonusNumberValidator from '../src/Validator/BonusNumberValidator/index.js';

describe('Validator 클래스 테스트', () => {
  test('구입 금액, 당첨 번호, 보너스 번호가 자연수가 아닌 경우 예외가 발생한다.', () => {
    const nums = ['0', 'abc', '-41234', '1   3  d b #'];

    nums.forEach((num) => {
      expect(() => {
        Validator.validatePurchaseAmount(num);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨번호, 보너스 번호는 1 ~ 45 사이의 자연수가 아니면 예외가 발생한다.', () => {
    const nums = ['0', '46', '100', '200', '300'];

    nums.forEach((num) => {
      expect(() => {
        Validator.isOutOfRange(num);
      }).toThrow('[ERROR]');
    });
  });

  test('구입 금액이 0이거나 자연수면서 1000으로 나눠 떨어지지 않는 경우 예외가 발생한다.', () => {
    const nums = ['0', '1000500', '100003', '1000123123', '1400'];

    nums.forEach((num) => {
      expect(() => {
        Validator.validatePurchaseAmount(num);
      }).toThrow('[ERROR]');
    });
  });
});

describe('WinningNumbersValidator 클래스 테스트', () => {
  test('당첨 번호가 중복되는 경우 예외가 발생한다.', () => {
    const numsArray = ['1,2,3,4,5,5', '12,23,24,25,25,33', '1,1,1,1,1,1'];

    numsArray.forEach((nums) => {
      expect(() => {
        WinningNumbersValidator.validateWinningNumbers(nums);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨 번호가 중복되지 않는 경우 예외가 발생하지 않는다.', () => {
    const numsArray = ['1,2,3,4,5,6', '12,23,24,25,29,33', '34,35,36,37,38,39'];

    numsArray.forEach((nums) => {
      expect(() => {
        WinningNumbersValidator.validateWinningNumbers(nums);
      }).not.toThrow('[ERROR]');
    });
  });
});

describe('BonusNumberValidator 클래스 테스트', () => {
  test('당첨 번호와 보너스 번호가 중복되는 경우 예외가 발생한다.', () => {
    const numsArray = ['1,2,3,4,5,5', '12,23,24,25,25,33', '1,1,1,1,1,1'];
    const bonusNumbers = ['1', '12', '1'];

    numsArray.forEach((nums, index) => {
      expect(() => {
        BonusNumberValidator.validateBonusNumber(nums, bonusNumbers[index]);
      }).toThrow('[ERROR]');
    });
  });

  test('보너스 번호가 2개 이상 입력되는 경우 예외가 발생한다.', () => {
    const numsArray = ['1,2,3,4,5,5', '12,23,24,25,25,33', '1,1,1,1,1,1'];
    const bonusNumbers = ['9,10', '1,2', '11,12'];

    numsArray.forEach((nums, index) => {
      expect(() => {
        BonusNumberValidator.validateBonusNumber(nums, bonusNumbers[index]);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨 번호와 보너스 번호가 중복되지 않는 경우 예외가 발생하지 않는다.', () => {
    const numsArray = ['1,2,3,4,5,6', '12,23,24,25,29,33', '34,35,36,37,38,39'];
    const bonusNumbers = ['7', '14', '45'];

    numsArray.forEach((nums, index) => {
      expect(() => {
        BonusNumberValidator.validateBonusNumber(nums, bonusNumbers[index]);
      }).not.toThrow('[ERROR]');
    });
  });
});
