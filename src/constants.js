const SETTING = Object.freeze({
  min_lotto_number: 1,
  input_length: 6,
  max_lotto_number: 45,
  min_cost: 1000,
});

const MESSAGE = Object.freeze({
  input_cost: '구입금액을 입력해 주세요.',
  sell: '개를 구매했습니다.',
  input_prize: '당첨 번호를 입력해 주세요.',
  input_bonus: '보너스 번호를 입력해 주세요.',
  prize_stats: '당첨 통계',
  three_match: (match) => `3개 일치 (5,000원) - ${match}개`,
  four_match: (match) => `4개 일치 (50,000원) - ${match}개`,
  five_match: (match) => `5개 일치 (1,500,000원) - ${match}개`,
  five_bonus_match: (match) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${match}개`,
  six_match: (match) => `6개 일치 (2,000,000,000원) - ${match}개`,
  total_return: (num) => `총 수익률은 ${num}입니다.`,
});