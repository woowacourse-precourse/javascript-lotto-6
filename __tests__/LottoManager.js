import { Random } from "@woowacourse/mission-utils";
import LottoManager from "../src/LottoManager";

/**
 *
 * @param {number[][]} numbersOfLottoes
 */
const mockRandoms = (numbersOfLottoes) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbersOfLottoes.forEach((numbers) => {
    Random.pickUniqueNumbersInRange.mockReturnValueOnce(numbers);
  });
};

describe("LottoManager(로또 매니저) 클래스 테스트", () => {
  /**
   * @type {LottoManager}
   */
  let lottoManager;

  let cases;

  beforeEach(() => {
    lottoManager = new LottoManager();
  });

  test("issueLottoes 메서드 호출 시 1000원 단위가 아닌 금액을 입력하면, 예외가 발생한다.", () => {
    // given
    const amountToPurchase = 3500;
    const expected = "[ERROR]";

    // when & then
    expect(() => {
      lottoManager.issueLottoes(amountToPurchase);
    }).toThrow(expected);
  });

  test("issueLottoes 메서드를 통해 로또를 발급하면, Lotto 객체의 배열을 반환한다.", () => {
    // given
    const amountToPurchase = 3000;
    const expectedNumbersOfLottoes = [
      [1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 10, 11],
      [1, 2, 11, 12, 44, 45],
    ];

    mockRandoms(expectedNumbersOfLottoes);

    // when
    const lottoes = lottoManager.issueLottoes(amountToPurchase);

    // then
    lottoes.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(expectedNumbersOfLottoes[index]);
    });
  });

  // given
  cases = [
    {
      input: {
        amountToPurchase: 6000,
        numbersOfLottoes: [
          [2, 6, 8, 9, 10, 12], // 6
          [2, 6, 8, 9, 10, 11], // 5 + bonus
          [6, 8, 9, 10, 12, 13], // 5
          [6, 8, 9, 10, 12, 15], // 5
          [1, 2, 8, 10, 12, 45], // 4
          [1, 2, 3, 4, 6, 8], // 3
        ],
        winningNumbers: [2, 6, 8, 9, 10, 12],
        bonusNumber: 11,
      },
      expected: {
        matchSix: 1,
        matchFiveAndBonus: 1,
        matchFive: 2,
        matchFour: 1,
        matchThree: 1,
        matchTwoOrLess: 0,
      },
    },
    {
      input: {
        amountToPurchase: 8000,
        numbersOfLottoes: [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
          [13, 14, 16, 38, 42, 45],
          [7, 11, 30, 40, 42, 43],
          [2, 13, 22, 32, 38, 45],
          [1, 3, 5, 14, 22, 45],
        ],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
      },
      expected: {
        matchSix: 0,
        matchFiveAndBonus: 0,
        matchFive: 0,
        matchFour: 0,
        matchThree: 1,
        matchTwoOrLess: 7,
      },
    },
  ];
  test.each(cases)(
    "drawLottoes 메서드를 통해 로또 추첨을 하면, getResultOfDrawLotto 메서드는 추첨 결과를 반환한다.",
    ({ input, expected: expectedResultOfDrawLotto }) => {
      mockRandoms(input.numbersOfLottoes);

      // when
      lottoManager.issueLottoes(input.amountToPurchase);
      lottoManager.generateWinningLotto(
        input.winningNumbers,
        input.bonusNumber,
      );
      lottoManager.drawLottoes();
      const resultOfDrawLotto = lottoManager.getResultOfDrawLotto();

      // then
      expect(resultOfDrawLotto.getResult()).toEqual(expectedResultOfDrawLotto);
    },
  );

  // given
  cases = [
    {
      input: {
        amountToPurchase: 6000,
        numbersOfLottoes: [
          [2, 6, 8, 9, 10, 12], // 6
          [2, 6, 8, 9, 10, 11], // 5 + bonus
          [6, 8, 9, 10, 12, 13], // 5
          [6, 8, 9, 10, 12, 15], // 5
          [1, 2, 8, 10, 12, 45], // 4
          [1, 2, 3, 4, 6, 8], // 3
        ],
        winningNumbers: [2, 6, 8, 9, 10, 12],
        bonusNumber: 11,
      },
      expected: "33884250.0%",
    },
    {
      input: {
        amountToPurchase: 8000,
        numbersOfLottoes: [
          [8, 21, 23, 41, 42, 43],
          [3, 5, 11, 16, 32, 38],
          [7, 11, 16, 35, 36, 44],
          [1, 8, 11, 31, 41, 42],
          [13, 14, 16, 38, 42, 45],
          [7, 11, 30, 40, 42, 43],
          [2, 13, 22, 32, 38, 45],
          [1, 3, 5, 14, 22, 45],
        ],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
      },
      expected: "62.5%",
    },
  ];
  test.each(cases)(
    "calculateRateOfReturn 메서드를 호출하면, 로또 당첨 수익률을 반환한다.",
    ({ input, expected: expectedRateOfReturn }) => {
      mockRandoms(input.numbersOfLottoes);

      // when
      lottoManager.issueLottoes(input.amountToPurchase);
      lottoManager.generateWinningLotto(
        input.winningNumbers,
        input.bonusNumber,
      );
      lottoManager.drawLottoes();
      lottoManager.getResultOfDrawLotto();
      const rateOfReturn = lottoManager.calculateRateOfReturn();

      // then
      expect(rateOfReturn).toEqual(expectedRateOfReturn);
    },
  );
});
