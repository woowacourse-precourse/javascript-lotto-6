export const PRIZE = Object.freeze({
  rank6: 0,
  rank5: 5000,
  rank4: 50000,
  rank3: 1500000,
  rank2: 30000000,
  rank1: 2000000000,
});

export const OPTIONS = Object.freeze({
  priceUnit: 1000,
  lottoNumberCount: 6,
  lottoNumberMax: 45,
  lottoNumberMin: 1,
});

export const MESSAGE = Object.freeze({
  enterPurchasePrice: `구입금액을 입력해 주세요.\n`,
  purchaseAmount: `개를 구매했습니다.`,
  enterWinningNumbers: `\n당첨 번호를 입력해 주세요.\n`,
  enterBonusNumber: `\n보너스 번호를 입력해 주세요.\n`,
  winningResult: `\n당첨 통계\n---`,
  profitPercentageA: `총 수익률은 `,
  profitPercentageZ: `%입니다.`,
});

export const ERROR = Object.freeze({
  invalidPriceNumber: `[ERROR] 구입 금액은 유효한 숫자여야 합니다.`,
  invalidPriceLeast: `[ERROR] 구입 금액은 1,000원 이상이여야 합니다.`,
  invalidPriceUnit: `[ERROR] 구입 금액은 1,000원 단위여야 합니다.`,
  invalidNumberCount: `[ERROR] 로또 번호는 6개의 숫자여야 합니다.`,
  invalidNumberRange: `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
  duplicateNumbers: `[ERROR] 로또 번호는 중복이 없어야 합니다.`,
});
