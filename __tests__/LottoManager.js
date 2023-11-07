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

  test("drawLottoes 메서드를 통해 로또 추첨을 하면, getResultOfDrawLotto 메서드는 추첨 결과를 반환한다.", () => {
    // given
    const amountToPurchase = 6000;
    const numbersOfLottoes = [
      [2, 6, 8, 9, 10, 12], // 6
      [2, 6, 8, 9, 10, 11], // 5 + bonus
      [6, 8, 9, 10, 12, 13], // 5
      [6, 8, 9, 10, 12, 15], // 5
      [1, 2, 3, 4, 6, 8], // 4
      [1, 2, 9, 10, 12, 45], // 3
    ];
    const winningNumbers = [2, 6, 8, 9, 10, 12];
    const bonusNumber = 11;
    const expectedResultOfDrawLotto = {
      matchSix: 1,
      matchFiveAndBonus: 1,
      matchFive: 2,
      matchFour: 1,
      matchThree: 1,
    };

    mockRandoms(numbersOfLottoes);

    // when
    lottoManager.issueLottoes(amountToPurchase);
    lottoManager.generateWinningLotto(winningNumbers, bonusNumber);
    lottoManager.drawLottoes();
    const resultOfDrawLotto = lottoManager.getResultOfDrawLotto();

    // then
    expect(resultOfDrawLotto.getResult()).toEqual(expectedResultOfDrawLotto);
  });
});
