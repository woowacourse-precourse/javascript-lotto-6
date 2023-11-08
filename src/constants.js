export const RANK_INFO = [
  { ranking: 5, matchNumbers: 3, winnings: 5000 },
  { ranking: 4, matchNumbers: 4, winnings: 50000 },
  { ranking: 3, matchNumbers: 5, winnings: 1500000 },
  { ranking: 2, matchNumbers: 5, winnings: 30000000 },
  { ranking: 1, matchNumbers: 6, winnings: 2000000000 },
];

export const LOTTO_RANGE_REGEX = /^([1-9]|[1-3][0-9]|4[0-5])$/;

export const LOTTO_ERROR_MESSAGE = {
  length: '[ERROR] 로또 번호는 6개여야 합니다.',
  range: '[ERROR] 로또 번호는 1부터 45까지의 숫자여야 합니다.',
  duplicate: '[ERROR] 로또 번호는 중복되지 않는 숫자로 이뤄져야 합니다.',
};

export const AMOUNT_ERROR_MESSAGE = {
  form: '[ERROR] 로또 구입 금액은 숫자 형식만 입력해야 합니다.',
  range: '[ERROR] 로또 구입은 1000원부터 가능합니다.',
  unit: '[ERROR] 로또 구입은 1000원 단위로 가능합니다.',
};

export const WINNING_NUMBERS_ERROR_MESSAGE = {
  range: '[ERROR] 당첨 번호는 1부터 45까지의 숫자 형식으로 입력해야 합니다.',
  length: '[ERROR] 당첨 번호는 쉼표로 구분해 6개로 입력해야 합니다.',
  duplicate: '[ERROR] 당첨 번호는 중복되지 않는 숫자 6개로 입력해야 합니다.',
};

export const BONUS_NUMBER_ERROR_MESSAGE = {
  range: '[ERROR] 보너스 번호는 1부터 45까지의 숫자 형식으로 입력해야 합니다.',
  duplicate: '[ERROR] 보너스 번호는 입력한 당첨 번호와 중복되지 않아야 합니다.',
};
