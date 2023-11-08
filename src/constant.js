export const ONE_RANK = 'one_rank';
export const TWO_RANK = 'two_rank';
export const THREE_RANK = 'three_rank';
export const FOUR_RANK = 'four_rank';
export const FIVE_RANK = 'five_rank';

export const EMPTY = '';
export const ONLY_NUMBER_REGEXP = /^\d+$/;

export const LOTTO_SETTING = Object.freeze({
  min: 1,
  max: 45,
  length: 6,
  max_purchase: 50000,
  unit: 1000,
  prize: {
    [FIVE_RANK]: 5000,
    [FOUR_RANK]: 50000,
    [THREE_RANK]: 1500000,
    [TWO_RANK]: 30000000,
    [ONE_RANK]: 2000000000,
  },
});

export const LOTTO_ERROR_MESSAGE = Object.freeze({
  six_digit: ',으로 구분하여 6자리여야 합니다.',
  duplicate: '중복되지 않은 6자리 숫자여야합니다.',
  out_of_range: '1~45 사이의 숫자여야합니다.',
  duplicated_bonus: '보너스 번호가 당첨번호와 중복됩니다.',
});

export const INPUT_ERROR_MESSAGE = Object.freeze({
  not_unit: '1,000원 단위로 입력해주세요.',
  over_purchase: '최대 구매 금액은 50,000원 입니다',
});

export const INPUT_MESSAGE = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  winning_number: '\n당첨 번호를 입력해 주세요.\n',
  bonus_number: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  purchase: '개를 구매했습니다.',
  divider: '---',
  statistics: '당첨 통계',
  [FIVE_RANK]: `3개 일치 (${LOTTO_SETTING.prize.five_rank.toLocaleString()}원) - `,
  [FOUR_RANK]: `4개 일치 (${LOTTO_SETTING.prize.four_rank.toLocaleString()}원) - `,
  [THREE_RANK]: `5개 일치 (${LOTTO_SETTING.prize.three_rank.toLocaleString()}원) - `,
  [TWO_RANK]: `5개 일치, 보너스 볼 일치 (${LOTTO_SETTING.prize.two_rank.toLocaleString()}원) - `,
  [ONE_RANK]: `6개 일치 (${LOTTO_SETTING.prize.one_rank.toLocaleString()}원) - `,
});
