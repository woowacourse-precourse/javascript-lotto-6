import Lotto from "../src/Lotto.js";
import { getLogSpy } from "./ApplicationTest.js";

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
  test("로또 번호의 개수가 6개 미만일 경우 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호중 하나라도 1~45가 아닌 경우 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 100]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호중 하나라도 정수가 아닌 경우 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 1.1]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호중 하나라도 숫자가 아닌 경우 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "asd"]);
    }).toThrow("[ERROR]");
  });

  test("로또 결과값 반환 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.getPrizeCount([1, 2, 3, 4, 5, 6], 7);
    expect(result).toEqual({
      count: 6,
      isbonus: false,
    });
  });

  test("로또 오름차순 출력 테스트", async () => {
    const log = getLogSpy();
    const lotto = new Lotto([6,5,4,3,2,1]);
    await lotto.printLottos();
    expect(log).toHaveBeenCalledWith(expect.stringContaining("[1, 2, 3, 4, 5, 6]"));
  });
});
