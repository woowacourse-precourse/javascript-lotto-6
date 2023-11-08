import BonusNumber from "../../src/model/BonusNumber";

describe('보너스 번호 클래스 테스트', () => {
  const bonusNumber = new BonusNumber([1, 2, 3, 4, 5, 6]);
  const error = '[ERROR]';

  describe('보너스 번호 검증 로직 테스트', () => {
    test('보너스 번호가 1 미만일 경우 예외처리', () => {
      //given
      const number = 0;
  
      //when, then
      expect(() => {
        bonusNumber.checkBonusNumber(number);
      }).toThrow(error);
    })

    test('보너스 번호가 45 초과일 경우 예외처리', () => {
      //given
      const number = 46;
  
      //when, then
      expect(() => {
        bonusNumber.checkBonusNumber(number);
      }).toThrow(error);
    })

    test('보너스 번호가 당첨번호와 중복될 경우 예외처리', () => {
      //given
      const number = 1;

      //when, then
      expect(() => {
        bonusNumber.checkBonusNumber(number);
      }).toThrow(error);
    })
  })
})
