import winnigNumberValidator from '../../src/validator/winningNumberValidator';

describe('당첨 번호 테스트', () => {
  describe('쉼표(,)를 기준으로 6개가 아닌경우 테스트', () => {
    test('당첨 번호를 쉼표를 기준으로 6개인 경우 테스트', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,5,6');
      }).not.toThrow();
    });

    test('당첨 번호를 나누는 기준이 없는 경우 테스트', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('123456');
      }).toThrow();
    });

    test('당첨 번호를 나누는 기준이 공백(" ")인 경우 테스트', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1 2 3 4 5 6');
      }).toThrow();
    });

    test('당첨 번호를 쉼표를 기준으로 다 나누지 않은 경우 테스트', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,56');
      }).toThrow();
    });
  });

  describe('쉼표(,)를 기준으로 각 값들이 숫자가 아닌경우 테스트', () => {
    test('올바른 6개의 숫자가 들어온 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,5,6');
      }).not.toThrow();
    });

    test('각 값들 중 문자가 포함된 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,십,6');
      }).toThrow();
    });

    test('각 값들 중 공백이 포함된 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,5 ,6');
      }).toThrow();
    });

    test('각 값들 중 음수가 포함된 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,-5,6');
      }).toThrow();
    });
  });

  describe('쉼표(,)를 기준으로 각 값들에 대한 범위 테스트', () => {
    test('6개의 숫자 모두 올바른 범위인 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,5,6');
      }).not.toThrow();
    });

    test('범위밖인 0이 포함된 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('0,2,3,4,5,6');
      }).toThrow();
    });

    test('범위밖인 46이 포함된 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,5,46');
      }).toThrow();
    });
  });

  describe('쉼표(,)를 기준으로 각 값들에 대한 중복 테스트', () => {
    test('6개의 숫자 모두 중복이 되지 않는 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,3,4,5,6');
      }).not.toThrow();
    });

    test('중복된 경우', () => {
      expect(() => {
        winnigNumberValidator.checkWinningNumbers('1,2,2,3,4,5');
      }).toThrow();
    });
  });
});
