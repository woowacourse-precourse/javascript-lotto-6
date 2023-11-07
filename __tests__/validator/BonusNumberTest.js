import { LOTTO_NUMBER } from '../../src/constants/constant.js';
import bonusNumberValidator from '../../src/validator/bonusNumberValidator.js';
import commonValidator from '../../src/validator/commonValidator.js';

describe('보너스 번호 테스트', () => {
  describe('commonValidator.checkNumberType 숫자형태 테스트', () => {
    test.each([['40'], ['45'], ['7']])('올바른 숫자형태 보너스 번호 테스트', (input) => {
      expect(() => {
        commonValidator.checkNumberType(input);
      }).not.toThrow();
    });

    test.each([[''], ['        '], ['6j'], ['6 '], [' 12'], [' 45 '], ['-45'], ['+45']])(
      '잘못된 숫자형태 보너스번호 테스트',
      (input) => {
        expect(() => {
          commonValidator.checkNumberType(input);
        }).toThrow();
      }
    );
  });

  describe('commonValidator.checkLottoNumberRange 범위 테스트', () => {
    test.each([['40'], ['45'], ['7']])('올바른 보너스 번호 범위 테스트', (input) => {
      expect(() => {
        commonValidator.checkLottoNumberRange(input);
      }).not.toThrow();
    });

    test.each([['0'], [LOTTO_NUMBER.MIN - 1], [LOTTO_NUMBER.MAX + 1]])(
      '잘못된 보너스번호 범위 테스트',
      (input) => {
        expect(() => {
          commonValidator.checkLottoNumberRange(input);
        }).toThrow();
      }
    );
  });

  describe('bonusNumberValidator.checkDuplicate 보너스 번호가 당첨 번호와 중복된 경우 테스트', () => {
    const winningNumbers = '10,13,25,32,42,45';
    test.each([
      ['40', winningNumbers],
      ['43', winningNumbers],
      ['7', winningNumbers],
    ])('중복되지 않은 올바른 보너스 번호 테스트', (bonusNumber, winnigNumbers) => {
      expect(() => {
        bonusNumberValidator.checkDuplicate(bonusNumber, winnigNumbers);
      }).not.toThrow();
    });

    test.each([
      ['10', winningNumbers],
      ['13', winningNumbers],
      ['25', winningNumbers],
      ['32', winningNumbers],
      ['42', winningNumbers],
      ['45', winningNumbers],
    ])('잘못된 보너스번호 테스트', (bonusNumber, winnigNumbers) => {
      expect(() => {
        bonusNumberValidator.checkDuplicate(bonusNumber, winnigNumbers);
      }).toThrow();
    });
  });
});
