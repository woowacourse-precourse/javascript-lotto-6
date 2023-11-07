const message = {
  tryPurchaseLotto: '구입금액을 입력해 주세요.\n',
  winningNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  winningStatistics: '\n당첨 통계\n---',
  threeMatches: '3개 일치 (5,000원) - ',
  fourMatches: '4개 일치 (50,000원) - ',
  fiveMatches: '5개 일치 (1,500,000원) - ',
  fiveBonusMatches: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  sixMatches: '6개 일치 (2,000,000,000원) - ',
};

const money = {
  threeMatches: 5000,
  fourMatches: 50000,
  fiveMatches: 1500000,
  fiveBonusMatches: 30000000,
  sixMatches: 2000000000,
};

const errorMessage = {
  purchaseNotNumber: '[ERROR] 구입금액을 숫자로 입력해 주세요.',
  purchaseWrongUnit: '[ERROR] 1000원 단위로 입력해 주세요.',
  winningNumbersNotNumber: '[ERROR] 로또 번호는 숫자여야 합니다.',
  winningNumbersRange: '[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.',
  winningNumbersCount: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicatedWinningNumbers: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
  bonusNumberNotNumber: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  bonusNumberRange: '[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.',
  duplicatedBonusNumber:
    '[ERROR] 보너스 번호는 로또 번호와 중복되지 않아야 합니다.',
  whiteSpace: '[ERROR] 입력에 빈 공간이 있으면 안됩니다.',
};

export { message, money, errorMessage };
