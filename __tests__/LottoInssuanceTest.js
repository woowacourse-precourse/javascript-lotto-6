import Lotto from "../src/class/Lotto.js";
import { generateLottos } from "../src/utils/lotto.js";

describe("utils/lotto - generateLottos 함수 테스트", () => {
  test("주어진 수량에 맞게 출력하는가 / 오름차순 정렬이 되었는가", () => {
    // given
    const lottoCount = 5;

    for (let i = 0; i < lottoCount; i++) {
      jest
        .spyOn(Lotto.prototype, "constructor")
        .mockImplementation(function (numbers) {
          this.numbers = numbers;
        });
    }

    // when
    const lottos = generateLottos(lottoCount);

    // then
    expect(lottos).toHaveLength(lottoCount);

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);

      for (let i = 0; i < lotto.numbers.length - 1; i++) {
        if (lotto.numbers[i + 1] !== undefined) {
          expect(lotto.numbers[i]).toBeLessThan(lotto.numbers[i + 1]);
        }
      }
    });
  });
});
