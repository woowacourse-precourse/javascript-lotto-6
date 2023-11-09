import Lotto from "../src/domain/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
});

// 내가 작성한 테스트 코드
describe("🎰 Lotto 클래스 내 비즈니스 로직, 메소드 테스트", () => {

  test("성공적으로 Lotto를 생성할 수 있다.", async () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6])
    expect(lotto.numbers).toStrictEqual([1, 2, 3, 4, 5, 6])

  });

  test("[hasBonusNumber] 보너스 번호가 있으면 true를 반환한다", async () => {
    // given
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6])
    // when
    const bonusNum = 1
    // then
    expect(lotto1.hasBonusNumber(bonusNum)).toBeTruthy()

  });

  test("[countIncludingNumbers] 로또와 당첨번호를 비교 가능하다", async () => {
    // 3개가 겹치도록 제시
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6])
    const winningNum = [1, 2, 3, 7, 8, 9]

    const result = lotto1.countMatchingNumbers(winningNum)

    expect(result).toBe(3)
  });
})