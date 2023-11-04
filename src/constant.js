export const LOTTO_SETTING = Object.freeze({
  min: 1,
  max: 45,
  length: 6,
  max_purchase: 50000,
  unit: 1000,
  five_rank_prize: 5000,
  four_rank_prize: 50000,
  three_rank_prize: 1500000,
  two_rank_prize: 30000000,
  one_rank_prize: 2000000000,
});

export const LOTTO_ERROR_MESSAGE = Object.freeze({
  six_digit: '숫자는 6자리이어야 합니다.',
  duplicate: '중복되지 않은 6자리 숫자여야합니다.',
  out_of_range: '1~45 사이의 중복되지 않은 숫자여야합니다.',
  duplicated_bonus: '보너스 번호가 당첨번호와 중복됩니다.',
  input_six_digit: ',으로 구분하여 6자리여야 합니다.',
});

export const INPUT_ERROR_MESSAGE = Object.freeze({
  not_unit: '1,000원 단위로 입력해주세요.',
  over_purchase: '최대 구매 금액은 50,000원 입니다',
});

export const INPUT_MESSAGE = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  winning_number: '당첨 번호를 입력해 주세요.\n',
  bonus_number: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  purchase: '개를 구매했습니다.',
  divider: '---',
  statistics: '당첨 통계',
  five_rank: `3개 일치 (${LOTTO_SETTING.five_rank_prize.toLocaleString()}원) - `,
  four_rank: `4개 일치 (${LOTTO_SETTING.four_rank_prize.toLocaleString()}원) - `,
  three_rank: `5개 일치 (${LOTTO_SETTING.three_rank_prize.toLocaleString()}원) - `,
  two_rank: `5개 일치, 보너스 볼 일치 (${LOTTO_SETTING.two_rank_prize.toLocaleString()}원) - `,
  one_rank: `6개 일치 (${LOTTO_SETTING.one_rank_prize.toLocaleString()}원) - `,
});
