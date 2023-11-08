export const LOTTO_PRICE = 1_000;
export const LOTTO_RANGE = Object.freeze({
  from: 1,
  to: 45,
});
export const LOTTO_COUNT = 6;
export const LOTTO_PRIZE = Object.freeze([5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000]);
export const LOTTO_STATISTICS_TITLE = '\n당첨 통계\n---------';
export const LOTTO_STATISTICS = Object.freeze([
  (count) => `3개 일치 (5,000원) - ${count}개`,
  (count) => `4개 일치 (50,000원) - ${count}개`,
  (count) => `5개 일치 (1,500,000원) - ${count}개`,
  (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
]);
