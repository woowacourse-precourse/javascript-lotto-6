import {LottoMachine} from "../src/domain/LottoMachine.js";
import {Lottos} from "../src/domain/Lottos.js";
import Lotto from "../src/domain/Lotto.js";

describe("LottoMachine 비즈니스 로직에 대한 테스트", () => {
  test("LottoMachine 객체를 생성해 성공적으로 추첨 가능하다.", async () => {
    // 가져올 로또들
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6])
    const lotto2 = new Lotto([7, 8, 9, 10, 11, 12])

    const lottos = new Lottos([lotto1, lotto2])

    // lotto machine 생성
    const inputWinning = [1, 2, 3, 13, 14, 15]
    const inputBonus = 7
    const lottoMachine = new LottoMachine(inputWinning, inputBonus)

    const result = lottoMachine.drawAll(lottos)

    //3개 일치 예상, 5등
    expect(result.fifthRank).toBe(1)

    expect(result.firstRank).toBe(0)
    expect(result.secondRank).toBe(0)
    expect(result.thirdRank).toBe(0)
    expect(result.forthRank).toBe(0)
  });

})