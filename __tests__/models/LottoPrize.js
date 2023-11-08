import LottoPrize from '../../src/models/LottoPrize';

describe('LottoPrize 테스트', () => {
  let lottoPrize;
  beforeEach(() => {
    lottoPrize = new LottoPrize();
  });
  test('로또 번호 6개가 일치하면 1등을 나타낸다.', () => {
    lottoPrize.calculatePrize(6, false);

    expect(lottoPrize.getStatus().firstPrizeCount).toBe(1);
  });
  test('로또 번호 5개가 일치하고 보너스 번호가 일치하면 2등을 나타낸다.', () => {
    lottoPrize.calculatePrize(5, true);

    expect(lottoPrize.getStatus().secondPrizeCount).toBe(1);
  });
  test('로또 번호 5개가 일치하고 보너스 번호가 일치하지 않으면 3등을 나타낸다.', () => {
    lottoPrize.calculatePrize(5, false);

    expect(lottoPrize.getStatus().thirdPrizeCount).toBe(1);
  });
  test('로또 번호 4개가 일치하면 4등을 나타낸다.', () => {
    lottoPrize.calculatePrize(4, false);

    expect(lottoPrize.getStatus().fourthPrizeCount).toBe(1);
  });
  test('로또 번호 3개가 일치하면 5등을 나타낸다.', () => {
    lottoPrize.calculatePrize(3, false);

    expect(lottoPrize.getStatus().fifthPrizeCount).toBe(1);
  });
});
