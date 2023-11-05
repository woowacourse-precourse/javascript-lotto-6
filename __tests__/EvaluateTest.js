import LottoEvaluator from "../src/domain/LottoEvaluator.js";

describe("로또 결과 평가", () => {
  let lottoEvaluator;
  const baseNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  beforeEach(() => {
    lottoEvaluator = new LottoEvaluator(baseNumbers, bonusNumber);
  });

  test("6개 번호가 모두 일치할 경우 FIRST 카운트를 증가시킨다.", () => {
    lottoEvaluator.evaluateTicket([1, 2, 3, 4, 5, 6]);
    expect(lottoEvaluator.matchCounts.FIRST).toBe(1);
  });

  test("5개 번호와 보너스 번호가 일치할 경우 SECOND 카운트를 증가시킨다.", () => {
    lottoEvaluator.evaluateTicket([1, 2, 3, 4, 5, 7]);
    expect(lottoEvaluator.matchCounts.SECOND).toBe(1);
  });

  test("5개 번호만 일치할 경우 THIRD 카운트를 증가시킨다.", () => {
    lottoEvaluator.evaluateTicket([1, 2, 3, 4, 5, 8]);
    expect(lottoEvaluator.matchCounts.THIRD).toBe(1);
  });

  test("4개 번호가 일치할 경우 FOURTH 카운트를 증가시킨다.", () => {
    lottoEvaluator.evaluateTicket([1, 2, 3, 4, 8, 9]);
    expect(lottoEvaluator.matchCounts.FOURTH).toBe(1);
  });

  test("3개 번호가 일치할 경우 FIFTH 카운트를 증가시킨다.", () => {
    lottoEvaluator.evaluateTicket([1, 2, 3, 9, 10, 11]);
    expect(lottoEvaluator.matchCounts.FIFTH).toBe(1);
  });

  test("2개 번호만 일치하는 경우 카운트가 증가하지 않는다.", () => {
    lottoEvaluator.evaluateTicket([1, 2, 8, 9, 10, 11]);
    expect(lottoEvaluator.matchCounts.FIRST).toBe(0);
    expect(lottoEvaluator.matchCounts.SECOND).toBe(0);
    expect(lottoEvaluator.matchCounts.THIRD).toBe(0);
    expect(lottoEvaluator.matchCounts.FOURTH).toBe(0);
    expect(lottoEvaluator.matchCounts.FIFTH).toBe(0);
  });
});
