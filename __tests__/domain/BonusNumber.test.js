import BonusNumber from "../../src/domain/BounsNumber";

describe('보너스번호 입력 테스트', () => {
  test('숫자가 아닌 입력이 들어올 때 에러 메시지가 출력된다.', () => {
    // given
    expect(() => new BonusNumber('공습경보', [1, 2, 3, 4, 5, 6])).toThrow('[ERROR]');
  
  });
});
