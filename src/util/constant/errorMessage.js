const PURCHASE_MONEY = Object.freeze({
  FORMAT_INVALID_PURCHASE_VALUE:
    '[ERROR] 구입금액을 입력해 주세요.\n(입력예시 : "14000")\n',
  FORMAT_INVALID_PURCHASE_REGEX:
    '[ERROR] 1000원 단위의 숫자만 입력해 주세요.\n(입력예시 : "14000")\n',
  DATA_NON_PURCHASE_THOUSAND:
    '[ERROR] 1000원 단위로 입력해 주세요.\n(입력예시 : "14000")\n',
});

const WINNING_NUMBER = Object.freeze({
  FORMAT_INVALID_WINNING_VALUE: '[ERROR] 당첨번호를 입력해 주세요\n',
  FORMAT_INVALID_WINNING_REGEX:
    '[ERROR] 당첨번호는 숫자만 입력이 가능합니다.숫자는(,)를 이용해서 구분해주세요.\n(예시: "1,2,3,4,5,6")\n',
  DATA_NON_WINNING_NUMBER:
    '[ERROR] 당첨번호는 6개의 중복되지 않는 숫자로 이루어져야 하며, 숫자 범위는 1~45여야 합니다.\n(예시: "1,2,3,4,5,6")\n',
});

const BONUS_NUMBER = Object.freeze({
  FORMAT_INVALID_BONUS_VALUE: '[ERROR] 보너스 번호를 입력해 주세요.\n',
  FORMAT_INVALID_BONUS_REGEX: '[ERROR] 하나의 숫자만 입력해 주세요.\n',
  DATA_NON_BONUS_NUMBER:
    '[ERROR] 1~45범위 사이의 하나의 숫자만 입력해 주세요.\n',
  DATA_NON_BONUS_REPEAT:
    '[ERROR] 당첨번호와 중복되지 않는 숫자를 입력해 주세요.\n(당첨번호 : ',
});

const ERROR_MESSAGE = {
  ...PURCHASE_MONEY,
  ...WINNING_NUMBER,
  ...BONUS_NUMBER,
};

export default Object.freeze(ERROR_MESSAGE);
