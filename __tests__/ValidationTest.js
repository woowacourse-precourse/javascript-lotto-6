import { validatePurchaseAmount, validateLuckyNumbers, validateBonusNumber } from "../src/error/Validation.js";

let purchaseIndex = 0;
let luckyNumbersIndex = 0;
let bonusNumberIndex = 0;

describe("사용자 입력 유효성 검증 테스트", () => {
  test.each([
    '1000 ',
    '110000',
    '500',
    '1300'
  ])('로또 구매 금액이 어긋난 형식, 10만원초과, 금액부족, 1000원단위 아닐시 에러발생', (inputs) => {
    const errorMesseage = [
      '[ERROR] 올바른 형식이 아닙니다.',
      '[ERROR] 로또는 1인당 최대 10만원 까지 구매 가능합니다.',
      '[ERROR] 금액이 부족합니다. 로또 한개의 금액은 1000원 입니다.',
      '[ERROR] 로또 구매 단위는 1000원 입니다.'
    ];

    expect(() => validatePurchaseAmount(inputs)).toThrow(errorMesseage[purchaseIndex]);
    purchaseIndex += 1;
  });

  test.each([
    '1, 2,3,4,5,6',
    '1,2,3,4,5,6,7',
    '1,1,2,3,4,5',
    '1,2,3,4,5,46'
  ])("로또 행운 번호 어긋난 형식, 6개의 숫자입력, 번호중복, 1~45 범위 초과시 에러발생", (inputs) => {
    const errorMesseage = [
      '[ERROR] 올바른 형식이 아닙니다.',
      '[ERROR] 로또 번호는 6개여야 합니다.',
      '[ERROR] 중복된 당첨 번호가 있습니다.',
      '[ERROR] 로또 번호는 1 부터 45 사이의 숫자입니다.'
    ];

    expect(() => validateLuckyNumbers(inputs)).toThrow(errorMesseage[luckyNumbersIndex]);
    luckyNumbersIndex += 1;
  });

  test.each([
    '3d',
    '0',
    '6'
  ])("보너스 번호 어긋난 형식, 1~45 이외의 숫자, 행운 번호와 중복시 에러발생", (inputs) => {
    const errorMesseage = [
      '[ERROR] 올바른 형식이 아닙니다.',
      '[ERROR] 로또 번호는 1 부터 45 사이의 숫자입니다.',
      '[ERROR] 7번째 보너스 번호는 6개의 당첨 번호와 중복이 돼선 안됩니다.'
    ];
    const luckyNumberArray = [1,2,3,4,5,6];

    expect(() => validateBonusNumber(inputs, luckyNumberArray)).toThrow(errorMesseage[bonusNumberIndex]);
    bonusNumberIndex += 1;
  });
});
