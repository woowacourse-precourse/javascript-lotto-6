import Lotto from "../src/Lotto.js";
import { Console } from "@woowacourse/mission-utils";

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

  // 아래에 추가 테스트 작성 가능
  test("로또 번호를 정확한 포맷으로 출력해야한다.", () => {
    //given
    logSpy = jest.spyOn(Console, "print").mockImplementation(() => {});
    const lotto = new Lotto([1, 44, 3, 5, 6, 7]);

    //when
    lotto.print();
    //then
    expect(logSpy).toHaveBeenCalledWith("[1, 44, 3, 5, 6, 7]");
  });

  test("로또 간의 비교 (일치수)", () => {
    //given
    const lotto = new Lotto([1, 44, 3, 5, 6, 7]);
    const lotto2 = new Lotto([1, 3, 41, 5, 6, 7]);

    //when
    const matchCount = lotto.getMatchingCountWith(lotto2);

    //then
    expect(matchCount).toBe(5);
  });
});
