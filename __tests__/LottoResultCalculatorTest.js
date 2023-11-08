import LottoResultCalculator from "../src/domain/LottoResultCalculator.js";
import LottoAnswer from "../src/domain/LottoAnswer.js";
import Lotto from "../src/Lotto.js";
import { PRIZE } from "../src/constants/lotto.js";

const ANSWER_LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];
const BONUS_NUMBER = "7";
const LOTTO_NUMBERS_ARRAY = [
  [1, 2, 3, 4, 11, 12],
  [1, 2, 3, 11, 12, 13],
  [21, 22, 23, 24, 25, 26],
];

const answerLotto = new Lotto(ANSWER_LOTTO_NUMBERS);
const lottoAnswer = new LottoAnswer(answerLotto, BONUS_NUMBER);
const lottos = LOTTO_NUMBERS_ARRAY.map((numbers) => new Lotto(numbers));

const calculator = new LottoResultCalculator(lottos);

describe("LottoResultCalculator 클래스에 대한 테스트", () => {
  test("calculatePrizes가 등수 결과를 올바르게 반환하는가", () => {
    const prizes = calculator.calculatePrizes(lottoAnswer);

    const EXPECTED_PRIZES = [PRIZE.fourth, PRIZE.fifth];

    expect(prizes).toEqual(EXPECTED_PRIZES);
  });

  test("calculateProfitRate 수익률을 올바르게 반환하는가", () => {
    const prizes = calculator.calculatePrizes(lottoAnswer);

    const profitRate = calculator.calculateProfitRate(prizes);

    const EXPECTED_PROFIT_RATE = "1833.3";
    expect(profitRate).toEqual(EXPECTED_PROFIT_RATE);
  });
});
