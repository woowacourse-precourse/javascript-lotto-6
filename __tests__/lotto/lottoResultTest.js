import LottoResult from "../../src/model/LottoResult.js";
import { ERROR_MESSAGE } from "../../src/constants/ErrorMessages.js";

describe("로또 결과 테스트", () => {
  test("1등", () => {
    const userNumbers = [1, 2, 3, 4, 5, 6];
    const answerNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const output = [1, 0, 0, 0, 0];

    const lotto = new LottoResult();
    lotto.setRank(userNumbers, answerNumbers);

    expect(lotto.getLottoRank()).toStrictEqual(output);
  });

  test("1등", () => {
    const userNumbers = [1, 2, 3, 4, 5, 6];
    const answerNumbers = [1, 2, 3, 4, 5, 6];
    const output = [1, 0, 0, 0, 0];

    const lotto = new LottoResult();
    lotto.setRank(userNumbers, answerNumbers);

    expect(lotto.getLottoRank()).toStrictEqual(output);
  });

  test("2등", () => {
    const userNumbers = [1, 2, 3, 4, 5, 7];
    const answerNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const output = [0, 1, 0, 0, 0];

    const lotto = new LottoResult();
    lotto.setBonusNumber(bonusNumber);
    lotto.setRank(userNumbers, answerNumbers);

    expect(lotto.getLottoRank()).toStrictEqual(output);
  });

  test("3등", () => {
    const userNumbers = [1, 2, 3, 4, 5, 8];
    const answerNumbers = [1, 2, 3, 4, 5, 6];
    const output = [0, 0, 1, 0, 0];

    const lotto = new LottoResult();
    lotto.setRank(userNumbers, answerNumbers);

    expect(lotto.getLottoRank()).toStrictEqual(output);
  });

  test("4등", () => {
    const userNumbers = [1, 2, 3, 4, 7, 8];
    const answerNumbers = [1, 2, 3, 4, 5, 6];
    const output = [0, 0, 0, 1, 0];

    const lotto = new LottoResult();
    lotto.setRank(userNumbers, answerNumbers);

    expect(lotto.getLottoRank()).toStrictEqual(output);
  });

  test("5등", () => {
    const userNumbers = [1, 2, 3, 7, 8, 9];
    const answerNumbers = [1, 2, 3, 4, 5, 6];
    const output = [0, 0, 0, 0, 1];

    const lotto = new LottoResult();
    lotto.setRank(userNumbers, answerNumbers);

    expect(lotto.getLottoRank()).toStrictEqual(output);
  });
});
