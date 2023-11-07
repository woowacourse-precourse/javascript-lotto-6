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
});
