import Validator from '../utils/Validator.js';

const invalidPurchaseAmounts = [900, 1100, -1000, 1000.5, '천원'];
const validPurchaseAmounts = [1000, 2000, 3000, 4000, 10000];
const invalidMainNumbers = [
  [0, 1, 2, 3, 4],
  [-1, 1, 2, 3, 4],
  [1.1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5, 46],
  [1, 2, 3, 4, 5, 6, 7],
];
const validMainNumbers = [[1, 2, 3, 4, 5, 6]];
const invalidBonusNumbers = [0, -1, 1.1, 46, '7,8', 6];
const validBonusNumbers = [7];

describe('유효성 검사 기능 테스트', () => {
  test.each([
    [invalidPurchaseAmounts, Validator.validatePurchaseAmount, false],
    [validPurchaseAmounts, Validator.validatePurchaseAmount, true],
  ])('구입 금액에 대한 유효성 검사 테스트', (purchaseAmounts, validation, result) => {
    purchaseAmounts.forEach((purchaseAmount) => expect(validation(purchaseAmount)).toEqual(result));
  });

  test.each([
    [invalidMainNumbers, Validator.validateLottoNumbers, false],
    [validMainNumbers, Validator.validateLottoNumbers, true],
  ])('로또 당첨 번호에 대한 유효성 검사 테스트', (mainNumbers, validation, result) => {
    mainNumbers.forEach((mainNumber) => expect(validation(mainNumber)).toEqual(result));
  });

  test.each([
    [invalidBonusNumbers, ...validMainNumbers, Validator.validateBonusNumber, false],
    [validBonusNumbers, ...validMainNumbers, Validator.validateBonusNumber, true],
  ])('보너스 번호에 대한 유효성 검사 테스트', (bonusNumbers, mainNumbers, validation, result) => {
    bonusNumbers.forEach((bonusNumber) =>
      expect(validation(mainNumbers, bonusNumber)).toEqual(result),
    );
  });
});
