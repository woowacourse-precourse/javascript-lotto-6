const error = {
  ERROR: '[ERROR]',

  name: {
    EXPENSE: 'expense input error',
    NUMBER: 'number input error',
    BONUSNUMVER: 'BonusNumber input error',
  },

  CORRECT_INTEGER: '금액을 제대로 입력해주세요.\n',
  CORRECT_BETWEEN: '1 ~ 45 사이의 값을 입력해주세요.\n',

  EXPENSE_MORE_THEN_LOTTO_PRICE: '1000원 이상 입력해주세요.\n',
  EXPENSE_UNIT_LOTTO_PRICE: '1000원 단위로 입력해주세요.\n',

  NUMBER_CORRECT_CONT: '로또 번호는 6개여야 합니다.\n',
  NUMBER_NOT_DUPLICATE: '중복되지 않는 숫자 6개를 입력해주세요.\n',

  NUMBER_INCLUDE_BONUS_NUMBER: '입력하신 당첨번호와 다른 값을 입력해주세요.\n',
};
export default error;
