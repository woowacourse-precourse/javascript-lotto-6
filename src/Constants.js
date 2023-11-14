export const LOTTO_PRICE = 1000;

export const LOTTO_NUMBER_RANGE = {
  MAX: 45,
  MIN: 1,
};

export const LOTTO_NUMBER_COUNT = {
  LOTTO: 6,
  BONUS: 1,
};

export const WINNING_MONEY = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

export const REQUEST_MESSAGE = {
  PUT_MONEY: '구입금액을 입력해 주세요.',
  PUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  PUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

export const regexNumber = /^[0-9]+$/;

export const VALIDATION_ERRORS_MESSAGE = {
  INCORRECT_AMOUNT: '[ERROR] 잘못된 금액입니다.',
  EMPTY_INPUT: '[ERROR] 입력값이 없습니다.',
  MONEY_NOT_NUMBER: '[ERROR] 입력값은 숫자여야 합니다.',
  NOT_ONLY_NUMBER: '[ERROR] 로또 번호는 숫자여야 합니다.',
  OVER_THE_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  ENTER_SIX_NUMBERS: '[ERROR] 로또 번호는 6개여야 합니다.',
  ENTER_ONE_BONUS_NUMBER: '[ERROR] 보너스 번호는 1개여야 합니다.',
  CONTAIN_SAME_NUMBER: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
};

export const PRINT_MESSAGE = (number) => ({
  lottoQuantity: `${number}개를 구매했습니다.`,
  profitRate: `총 수익률은 ${number}%입니다.`,
});

export const WINNING_LIST = (winningRank) => `
당첨 통계 \n
--- \n
3개 일치 (${WINNING_MONEY.FIFTH.toLocaleString()}원) - ${winningRank.fifth}개 \n
4개 일치 (${WINNING_MONEY.FOURTH.toLocaleString()}원) - ${
  winningRank.fourth
}개 \n
5개 일치 (${WINNING_MONEY.THIRD.toLocaleString()}원) - ${winningRank.third}개 \n
5개 일치, 보너스 볼 일치 (${WINNING_MONEY.SECOND.toLocaleString()}원) - ${
  winningRank.second
}개 \n
6개 일치 (${WINNING_MONEY.FIRST.toLocaleString()}원) - ${
  winningRank.first
}개 \n`;
