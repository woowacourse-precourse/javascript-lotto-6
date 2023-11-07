export const INPUT = {
  user_money: '구입 금액을 입력해 주세요.\n',
  winning_numbers: '당첨 번호를 입력해 주세요.\n',
  bonus_number: '보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT = {
  statistics: '당첨 통계',
  divider: '---',
  ticket_count: (count) => `${count}개를 구매했습니다.`,
  ticket_number: (number) => `[${number}]`,
  first_prize: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  second_prize: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  third_prize: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  fourth_prize: (count) => `4개 일치 (50,000원) - ${count}개`,
  fifth_prize: (count) => `3개 일치 (5,000원) - ${count}개`,
  total_return: (value) => `총 수익률은 ${value}%입니다.`,
};

export const INPUT_ERROR = {
  null: '[ERROR] 입력이 없습니다.',
  type: '[ERROR] 입력이 숫자가 아닙니다.',
  zero_or_less: '[ERROR] 입력이 0 이하입니다.',
  thousands: '[ERROR] 입력이 1,000원 단위가 아닙니다.',
  commas: '[ERROR] 입력이 쉼표로 구분되지 않습니다.',
  range: '[ERROR] 입력이 1 ~ 45 사이가 아닙니다',
  duplicate: '[ERROR] 입력에 중복된 값이 있습니다.',
  duplicate_winning: '[ERROR] 입력이 당첨 번호와 중복되는 값입니다.',
  length: (count) => `[ERROR] 입력이 ${count}개가 아닙니다.`,
};

export const LOTTO_ERROR = {
  length: '[ERROR] 로또 번호는 6개여야 합니다.',
};
