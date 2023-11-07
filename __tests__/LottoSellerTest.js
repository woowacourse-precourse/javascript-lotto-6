import LottoSeller from "../src/LottoSeller.js";
import { getLogSpy, mockQuestions } from "./ApplicationTest.js";
import { MESSAGE } from "../src/utils/Constants.js";

describe("로또 판매 클래스 테스트", () => {
  test("로또 금액이 2000원이면 로또 티켓은 2장이 나온다.", async () => {
    //given
    const logSpy = getLogSpy();

    const lottoSeller = new LottoSeller();
    mockQuestions(["2000"]);

    //when
    await lottoSeller.buyLotto();

    // then
    expect(lottoSeller.lottoTickets).toBe(2);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`2개를 구매했습니다.`),
    );
  });

  test("로또 금액이 1000원 단위가 아니면 경고문구가 나오고 다시 입력한다.", async () => {
    //given
    const logSpy = getLogSpy();

    const lottoSeller = new LottoSeller();
    mockQuestions(["1200", "abc", "3000"]);

    //when
    await lottoSeller.buyLotto();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(MESSAGE.ERROR.NO_VALID_MONEY),
    );
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`3개를 구매했습니다.`),
    );
  });

  test("로또 금액을 0으로 입력하거나 아무것도 입력하지 않으면 경고문구가 나오고 다시 입력한다.", async () => {
    //given
    const logSpy = getLogSpy();

    const lottoSeller = new LottoSeller();
    mockQuestions([undefined, "", "0", "4000"]);

    //when
    await lottoSeller.buyLotto();

    // then
    expect(lottoSeller.lottoTickets).toBe(4);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`4개를 구매했습니다.`),
    );
  });
});
