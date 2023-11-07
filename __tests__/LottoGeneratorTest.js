import {LottoGenerator} from "../src/domain/LottoGenerator.js";
import Lotto from "../src/domain/Lotto.js";

describe("LottoGenerator 로직에 대한 테스트", () => {
  test("로또를 성공적으로 생성한다.", async () => {
    // given
    const lottoGenerator = LottoGenerator.fixed()
    const result = lottoGenerator.generate()

    const expectResult = new Lotto([1, 2, 3, 4, 5, 6])
    expect(result).toStrictEqual(expectResult)
  });
})