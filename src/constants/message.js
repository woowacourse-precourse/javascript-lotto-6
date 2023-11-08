const ERROR_MESSAGE = {
  lotto_length: '[ERROR] 로또 번호는 6개여야 합니다.',
  lotto_duplicate: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  lotto_range: '[ERROR] 로또 번호는 1~45 범위여야 합니다.',
  min_purchase_amount: '[ERROR] 로또 구입 금액은 최소 1000원 입니다.',
  cant_divide_purchase_amount:
    '[ERROR] 로또 구입 금액은 1000원 단위로 나누어 떨어져야 합니다.',
  winning_number: '[ERROR] 당첨 번호 입력이 잘못되었습니다.',
  bonus_number_range: '[ERROR] 보너스 번호는 1~45 범위여야 합니다.',
  bonus_duplicate: '[ERROR] 중복된 보너스번호 입니다.',
};

const ENTER_MESSAGE = {
  purchase_amount: '구입금액을 입력해 주세요.\n',
  winning_number: '\n당첨 번호를 입력해 주세요.\n',
  bonus_number: '\n보너스 번호를 입력해 주세요.\n',
  winning_statistics: '\n당첨 통계\n---',
};
export { ERROR_MESSAGE, ENTER_MESSAGE };
