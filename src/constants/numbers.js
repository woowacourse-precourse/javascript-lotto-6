export const LOTTO_NUMBERS = Object.freeze({
  minimum: 1,
  maximum: 45,
  ranks: 5,
  amount: 1000,
});

// 실행되는 환경에서 5등부터 차례로 보여주기에 이와 동일하게 작성
export const LOTTERY_WINNINGS = Object.freeze({
  rank5: 5000,
  rank4: 50000,
  rank3: 1500000,
  rank2: 30000000,
  rank1: 2000000000,
});

export const COUNT = Object.freeze({
  purchasedLottoNumbers: 6,
  winningNumbers: 6,
  bonusNumber: 1,
});
