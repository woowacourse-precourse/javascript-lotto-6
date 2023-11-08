import TargetNumber from "../../src/model/TargetNumber";

describe('당첨 번호 클래스 테스트', () => {
  const targetNumber = new TargetNumber();
  const error = '[ERROR]';

  describe('당첨 번호 검증 로직 테스트', () => {
    test('당첨 번호가 6개가 아닐 경우 예외처리', () => {
      //given
      const targetArray = [1,2,3,4,5];
  
      //when, then
      expect(() => {
        targetNumber.checkTargetNumberValidity(targetArray);
      }).toThrow(error);
    })

    test('당첨 번호가 중복일 경우 예외처리', () => {
      //given
      const targetArray = [1,2,2,3,4,5];
  
      //when, then
      expect(() => {
        targetNumber.checkTargetNumberValidity(targetArray);
      }).toThrow(error);
    })

    test('당첨 번호가 숫자가 아닐 경우 예외처리', () => {
      //given
      const targetArray = [1,2,3,4,5,'D'];
  
      //when, then
      expect(() => {
        targetNumber.checkTargetNumberValidity(targetArray);
      }).toThrow(error);
    })

    test('당첨 번호가 1보다 작을 경우 예외처리', () => {
      //given
      const targetArray = [0,1,2,3,4,5];
  
      //when, then
      expect(() => {
        targetNumber.checkTargetNumberValidity(targetArray);
      }).toThrow(error);
    })

    test('당첨 번호가 45보다 클 경우 예외처리', () => {
      //given
      const targetArray = [1,2,3,4,5,46];
  
      //when, then
      expect(() => {
        targetNumber.checkTargetNumberValidity(targetArray);
      }).toThrow(error);
    })
  })
})
