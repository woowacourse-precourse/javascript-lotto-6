export const SETTING = Object.freeze({
  min_lotto_number: 1,
  min_match: 3,
  bonus_match: 5,
  size: 6,
  max_lotto_number: 45,
  lotto_cost: 1000,
  bonus: 'bonus',
});

export const PRICE = Object.freeze({
  3: 5000,
  4: 50000,
  5: 1500000,
  bonus: 30000000,
  6: 2000000000,
});

export const MESSAGE = Object.freeze({
  input_cost: '구입금액을 입력해 주세요.',
  sell: '개를 구매했습니다.',
  input_prize: '당첨 번호를 입력해 주세요.',
  input_bonus: '보너스 번호를 입력해 주세요.',
  prize_stats: '당첨 통계',
  line: '---',
  total_return: (num) => `총 수익률은 ${num}%입니다.`,
});

export const MATCH = Object.freeze({
  normal_match: (count, price, match) => `${count}개 일치 (${price}원) - ${match}개`,
  bonus_match: (price, match) => `5개 일치, 보너스 볼 일치 (${price}원) - ${match}개`,
});

export const PREFIX = Object.freeze({
  error: '[ERROR]',
});

export const ERROR_MESSAGE = Object.freeze({
  not_number: `${PREFIX.error} 숫자가 아닙니다.`,
  not_natural_number: `${PREFIX.error} 자연수가 아닙니다.`,
  not_lotto_cost: `${PREFIX.error} ${SETTING.lotto_cost} 단위의 금액을 입력하세요.`,
  not_six_numbers: `${PREFIX.error} 쉼표를 기준으로 ${SETTING.size}개의 숫자를 입력하세요.`,
  not_range: `${PREFIX.error} ${SETTING.min_lotto_number} 이상 ${SETTING.max_lotto_number} 이하의 숫자를 입력하세요.`,
  not_unique: `${PREFIX.error} 중복된 숫자가 존재합니다.`,
  not_unique_bonus: `${PREFIX.error} 이미 존재하는 당첨번호 입니다.`,
});