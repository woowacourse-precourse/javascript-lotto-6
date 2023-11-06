import Lottos from "../src/model/Lottos";
import { Console } from "@woowacourse/mission-utils";

describe("input 테스트", () => {
  test("구입 금액의 단위는 1000단위다.", () => {
    const amounts = ['2500','3600'];
    amounts.forEach((amount) => {
      expect(() => new Lottos(amount)).toThrow("[ERROR]");
    })
  });
});
