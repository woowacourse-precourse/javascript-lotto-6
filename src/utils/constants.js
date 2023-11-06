const MESSAGE = Object.freeze({
  input_amount: '구입금액을 입력해 주세요.\n',
  input_winning_numbers: '\n당첨 번호를 입력해 주세요.\n',
  input_bonus_number: '\n보너스 번호를 입력해 주세요.\n',
  statistics: '\n당첨 통계\n---',
});

const ERROR_MESSAGE = Object.freeze({
  header: '[ERROR]',
  numbers_length: '로또 번호는 6개여야 합니다.',
  numbers_duplicate: '로또 번호는 중복되지 않아야 합니다.',
  numbers_range: '로또 번호는 1~45 사이의 숫자여야 합니다.',
  winning_numbers_duplicate: '당첨 번호는 중복되지 않아야 합니다.',
  bonus_number_duplicate: '보너스 번호는 당첨 번호와 중복되지 않아야 합니다.',
  amount_division: '로또 구입 금액은 1000원 단위로 나누어 떨어져야 합니다.',
  winning_numbers_not_set: '당첨 번호가 설정되어 있지 않습니다.',
  not_number: '숫자를 입력해 주세요.',
  empty: '빈 값은 입력할 수 없습니다.',
});

const LOTTO = Object.freeze({
  max_number: 45,
  min_number: 1,
  max_match_count: 6,
  min_match_count: 3,
  amount_unit: 1000,
  length: 6,
});

const LOTTO_RANK_PAYABLE = Object.freeze([
  5000, 50000, 1500000, 30000000, 2000000000,
]);
const LOTTO_STATISTICS_KEY = Object.freeze(['3,0', '4,0', '5,0', '5,1', '6,0']);
const LOTTO_STATISTICS_MESSAGE = Object.freeze([
  `3개 일치 (5,000원) - `,
  `4개 일치 (50,000원) - `,
  `5개 일치 (1,500,000원) - `,
  `5개 일치, 보너스 볼 일치 (30,000,000원) - `,
  `6개 일치 (2,000,000,000원) - `,
]);

const REGEX = Object.freeze({
  three_digits_comma: /\B(?=(\d{3})+(?!\d))/g,
  comma: ',',
  comma_space: ', ',
});

export {
  LOTTO,
  REGEX,
  MESSAGE,
  ERROR_MESSAGE,
  LOTTO_RANK_PAYABLE,
  LOTTO_STATISTICS_KEY,
  LOTTO_STATISTICS_MESSAGE,
};
