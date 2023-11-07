import { Console } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

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

  test("로또 리스트 오름차순 정렬", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    const result = lotto.sortLottoList();

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 당첨 번호와 일치 갯수 구하기", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const prizeList = [1, 2, 3, 4, 5, 6];

    const result = lotto.getMatchedCount(prizeList);

    expect(result).toEqual(6);
  });
});
