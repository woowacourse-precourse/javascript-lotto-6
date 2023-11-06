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
