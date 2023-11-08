import Bonus from "../src/domain/Bonus.js";

describe('보너스 클래스 테스트', () => {
  const luckyNumbers = [1, 2, 3, 4, 5, 6];

  test('숫자 이외의 다른 모든 입력에 대해 에러 발생', () => {
    expect(() => {
      new Bonus('a', luckyNumbers)
    }).toThrow('[ERROR] 올바른 형식이 아닙니다.');
  });

  test('공백 문자 입력에 대한 에러 발생', () => {
    expect(() => {
      new Bonus(' ', luckyNumbers)
    }).toThrow('[ERROR] 로또 번호는 1 부터 45 사이의 숫자입니다.');
  });

  test('[1,45] 범위의 숫자가 아니면 에러 발생', () => {
    expect(() => {
      new Bonus('46', luckyNumbers)
    }).toThrow('[ERROR] 로또 번호는 1 부터 45 사이의 숫자입니다.');
  });

  test('6개의 당첨번호와 중복이되면 에러 발생', () => {
    expect(() => {
      new Bonus('1', luckyNumbers)
    }).toThrow('[ERROR] 7번째 보너스 번호는 6개의 당첨 번호와 중복이 돼선 안됩니다.');
  });

  test('보너스 번호를 넘버타입으로 리턴해주는 메서드', () => {
    const bonus = new Bonus('45', luckyNumbers);

    expect(bonus.getBonusNumber()).toEqual(45);
  });
}); 
