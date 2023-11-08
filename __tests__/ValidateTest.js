import Validate from '../src/Ui/Validate';
import COMMON_VALUE from '../src/constants/\bcommonValue';

describe('입력값에 대한 유효성 검사기능 테스트', () => {
  test('구매금액 입력에 대한 유효성기능 테스트 (PurchaseAmoun)', () => {
    //given
    const incorrectInputs = [5001, 999, NaN, 520];

    // when then
    incorrectInputs.forEach((wrongPurchaseCost) => {
      expect(() => {
        Validate.PurchaseAmount(wrongPurchaseCost);
      }).toThrow('[ERROR]');
    });
  });

  test('당첨번호 입력에 대한 유효성 기능테스트 (WinningNumbers)', () => {
    //given
    const incorrectInputs = [
      [1, 1, 3, 5, 6, 7],
      [NaN, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6, 7],
      [-1, 5, 47, 50, 55, 60],
    ];

    //when then
    incorrectInputs.forEach((wrongNumbers) => {
      expect(() => {
        Validate.WinningNumbers(wrongNumbers);
      }).toThrow('[ERROR]');
    });
  });

  test('보너스 번호 입력에 대한 유효성기능 테스트 (BonusNumber)', () => {
    //given
    const incorrectInputs = [-2, 0, 50, NaN];

    //when then
    incorrectInputs.forEach((wrongBonusNumber) => {
      expect(() => {
        Validate.BonusNumber(wrongBonusNumber);
      }).toThrow('[ERROR]');
    });
  });

  test('입력한 당첨번호에 중복된 값이 있는지 판별하는 유효성기능 테스트 (checkSameNumber)', () => {
    //given
    const incorrectInputs = [1, 1, 2, 3, 4, 5];

    //when
    const result = Validate.checkSameNumber(incorrectInputs);

    //then
    expect(result).toEqual(COMMON_VALUE.FAIL);
  });

  test('입력한 당첨번호에 범위 밖의 값이 있는지 판별하는 유효성기능 테스트 (checkBounds)', () => {
    //given
    const incorrectInputs = [1, 2, 3, 48, 5, 6];

    //when
    const result = Validate.checkBounds(incorrectInputs);

    //then
    expect(result).toEqual(COMMON_VALUE.FAIL);
  });
});
