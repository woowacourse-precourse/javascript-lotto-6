import { MissionUtils } from "@woowacourse/mission-utils";
import { Read } from "../src/utils/read.js";
import { LOTTO } from "../src/constants/lotto.js";
import { ErrorMessage } from "../src/utils/message.js";
import { getLottoNumbers } from "./LottoTest.js";

const lottoSample = getLottoNumbers(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER);
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Read test", () => {
  const input = [];
  const inputInit = (...arr) => {
    arr.forEach((elm, index) => (input[index] = elm));
  };

  beforeEach(() => {
    input.fill(lottoSample.join(","));
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(async () =>
      Promise.resolve(input.shift())
    );
  });

  test(`purchaseAmount : 가격이 ${LOTTO.PRICE}의 배수일 경우`, async () => {
    inputInit(LOTTO.PRICE * 7);
    const res = await Read.purchaseAmount();

    expect(res).toBe(LOTTO.PRICE * 7);
  });

  test(`purchaseAmount : 가격이 ${LOTTO.PRICE}의 배수가 아닐 경우`, async () => {
    inputInit(LOTTO.PRICE + 1, LOTTO.PRICE);
    const logSpy = getLogSpy();

    await Read.purchaseAmount();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ErrorMessage.incorrectFormat()));
  });

  test(`purchaseAmount : 가격이 숫자가 아닐 경우`, async () => {
    inputInit(NaN, LOTTO.PRICE);
    const logSpy = getLogSpy();

    await Read.purchaseAmount();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ErrorMessage.incorrectFormat()));
  });

  test(`answerNumbers : 숫자일 경우`, async () => {
    inputInit("1,2,3,4,5,6");

    const res = await Read.answerNumbers();

    expect(res).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test(`answerNumbers : 숫자가 아닐 경우`, async () => {
    inputInit("1,2,3,4,5,a", lottoSample.join(","));
    const logSpy = getLogSpy();

    await Read.answerNumbers();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ErrorMessage.incorrectLottoNumber())
    );
  });

  test(`answerNumbers : 개수가 부족할 경우`, async () => {
    inputInit("1,2,3,4,5", lottoSample.join(","));
    const logSpy = getLogSpy();

    await Read.answerNumbers();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(ErrorMessage.incorrectLottoCount())
    );
  });

  test(`bonusNumbers : answerNumbers와 겹치는 숫자일 경우`, async () => {
    inputInit(lottoSample.join(","), String(lottoSample[0]), "7");
    const logSpy = getLogSpy();

    await Read.answerNumbers();
    await Read.bonusNumbers(lottoSample);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(ErrorMessage.duplicateNumbers()));
  });
});
