import Lotto from "../src/Lotto.js";
import { MATCHED_RESULT } from "../src/LottoResult.js";

describe("로또 클래스 테스트", () => {
  describe("validation 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow("[ERROR]");
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow("[ERROR]");
    });
  });

  test("로또 정보를 가져왔을 때 정렬된 로또 번호의 배열을 반환한다.", () => {
    const lotto = new Lotto([6, 2, 3, 5, 4, 1]);

    expect(lotto.getInformation()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  describe("로또 결과 체크 테스트", () => {
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];

    test.each([
      [
        "0개 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: [7, 8, 9, 10, 11, 12],
          bonusNumber: 13,
        },
        MATCHED_RESULT.miss,
      ],
      [
        "1개 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: [1, 8, 9, 10, 11, 12],
          bonusNumber: 13,
        },
        MATCHED_RESULT.miss,
      ],
      [
        "2개 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: [1, 2, 9, 10, 11, 12],
          bonusNumber: 13,
        },
        MATCHED_RESULT.miss,
      ],
      [
        "3개 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: [1, 2, 3, 10, 11, 12],
          bonusNumber: 13,
        },
        MATCHED_RESULT.three,
      ],
      [
        "4개 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: [1, 2, 3, 4, 11, 12],
          bonusNumber: 13,
        },
        MATCHED_RESULT.four,
      ],
      [
        "5개 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: [1, 2, 3, 4, 5, 12],
          bonusNumber: 13,
        },
        MATCHED_RESULT.five,
      ],
      [
        "5개 일치, 보너스 볼 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: [1, 2, 3, 4, 5, 14],
          bonusNumber: 6,
        },
        MATCHED_RESULT.fiveBonus,
      ],
      [
        "6개 일치",
        {
          lottoNumbers: LOTTO_NUMBERS,
          winningNumbers: LOTTO_NUMBERS,
          bonusNumber: 13,
        },
        MATCHED_RESULT.six,
      ],
    ])("%s", (_, input, result) => {
      const lotto = new Lotto(LOTTO_NUMBERS);
      const lottoResult = lotto.checkWinningNumbers(
        input.winningNumbers,
        input.bonusNumber,
      );
      expect(lottoResult.getResult()).toEqual(result);
    });
  });
});
