const INPUT = Object.freeze({
  price: '구입금액을 입력해 주세요.',
  winning_numbers: '당첨 번호를 입력해 주세요.',
  bonus_number: '보너스 번호를 입력해 주세요.',
});

const ERROR = Object.freeze({
  not_a_valid_number: '[ERROR] 로또 구입금액은 자연수만 입력이 가능합니다.',
  not_a_thousand_unit: '[ERROR] 로또 구입금액은 1,000원 단위로 입력이 가능합니다.',
  not_a_valid_count: '[ERROR] 로또 번호는 6개여야 합니다.',
  not_duplicate_numbers: '[ERROR] 로또 번호에 중복된 숫자는 불가능합니다.',
});

const OUTPUT = Object.freeze({
  count: '개를 구매했습니다.',
  winning_statistics: '당첨 통계',
  three_numbers: '3개 일치 (5,000원)',
  four_numbers: '4개 일치 (50,000원)',
  five_plus_bonus_numbers: '5개, 보너스 볼 일치 (30,000,000원)',
  six_numbers: '6개 일치 (2,000,000,000원)',
});

const COUNT = '개';
const HYPHEN = '-';
const LINE_BREAK = '\n';

export { INPUT, ERROR, OUTPUT, COUNT, HYPHEN, LINE_BREAK };
