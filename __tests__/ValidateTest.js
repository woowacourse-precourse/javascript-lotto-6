import { BonusNumberValidate, CashValidate } from '../src/Validate/Validate.js';

describe('보너스 번호 검증 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test('bonusNumberValidate() 보너스 번호가 당첨 번호와 중복될 경우 에러를 발생시킨다.', () => {
    expect(() => {
      BonusNumberValidate.bonusNumberValidate(['1'], winningNumbers);
    }).toThrow('[ERROR] 당첨 번호와 중복된 숫자가 있습니다.');
  });

  test('bonusNumberValidate() 보너스 번호가 하나가 아닐 경우 에러를 발생시킨다.', () => {
    expect(() => {
      BonusNumberValidate.bonusNumberValidate(['11', '12'], winningNumbers);
    }).toThrow('[ERROR] 하나의 입력이 아닙니다.');
  });

  test('CommonError 보너스 번호가 숫자가 아닐 경우 에러를 발생시킨다.', () => {
    expect(() => {
      BonusNumberValidate.bonusNumberValidate(['10j'], winningNumbers);
    }).toThrow('[ERROR] 숫자가 아닙니다.');
  });

  test('CommonError 보너스 번호가 1~45가 아닐경우 예외가 발생한다', () => {
    expect(() => {
      BonusNumberValidate.bonusNumberValidate(['46'], winningNumbers);
    }).toThrow('[ERROR] 1~45 숫자가 아닙니다.');
  });
});

describe('현금 검증 테스트', () => {
  test('cashValidate() 현금이 숫자가 아닐 경우 에러를 발생시킨다.', () => {
    expect(() => {
      CashValidate.cashValidate(Number('100d'));
    }).toThrow('[ERROR] 숫자가 아닙니다.');
  });

  test('cashValidate() 현금이 1000원 미만일 경우 에러를 발생시킨다.', () => {
    expect(() => {
      CashValidate.cashValidate(500);
    }).toThrow('[ERROR] 금액이 부족합니다.');
  });

  test('cashValidate() 현금이 1000원 단위가 아닐 경우 에러를 발생시킨다.', () => {
    expect(() => {
      CashValidate.cashValidate(1500);
    }).toThrow('[ERROR] 1000원 단위가 아닙니다.');
  });
});
