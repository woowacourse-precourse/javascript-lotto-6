import {LottoGenerator} from "../src/domain/LottoGenerator.js";
import {LottoSeller} from "../src/domain/LottoSeller.js";
import {Money} from "../src/domain/Money.js";

describe("LottoSeller의 비즈니스 로직", () => {
  test("잔액이 떨어질 때까지 로또를 성공적으로 구매할 수 있다", async () => {
    const lottoGenerator = new LottoGenerator()
    const lottoSeller = new LottoSeller(lottoGenerator)
    const money = new Money(3000)

    const lottos = lottoSeller.buyMany(money)
    const lottosDto = lottos.makeLottosDto()

    //3천원이니까 3개의 로또가 나오도록 예상
    expect(lottosDto.lottos.length).toBe(3)
  });

})