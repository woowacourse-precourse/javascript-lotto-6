const COUNT = '개';
const PERCENT = '%입니다.';
const HYPHEN = '-';
const LINE_BREAK = '\n';

const INPUT = Object.freeze({
  price: '구입금액을 입력해 주세요.',
  winning_numbers: '당첨 번호를 입력해 주세요.',
  bonus_number: '보너스 번호를 입력해 주세요.',
});

const ERROR = Object.freeze({
  not_a_valid_price: '[ERROR] 구입금액은 자연수여야 합니다.',
  not_a_thousand_unit: '[ERROR] 구입금액은 1,000원 단위여야 합니다.',
  not_a_valid_count: '[ERROR] 번호의 개수는 6개여야 합니다.',
  not_duplicate_numbers: '[ERROR] 번호는 중복될 수 없습니다.',
  not_a_valid_number: '[ERROR] 번호는 1부터 45까지의 자연수여야 합니다.',
});

const OUTPUT = Object.freeze({
  count: '개를 구매했습니다.',
  winning_statistics: '당첨 통계',
  three_match: `3개 일치 (5,000원) ${HYPHEN} `,
  four_match: `4개 일치 (50,000원) ${HYPHEN} `,
  five_match: `5개 일치 (1,500,000원) ${HYPHEN} `,
  five_plus_bonus_match: `5개 일치, 보너스 볼 일치 (30,000,000원) ${HYPHEN} `,
  six_match: `6개 일치 (2,000,000,000원) ${HYPHEN} `,
  total_profit_margin: '총 수익률은 ',
});

export { COUNT, PERCENT, HYPHEN, LINE_BREAK, INPUT, ERROR, OUTPUT };
