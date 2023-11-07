const errorMessage = Object.freeze({
  NOT_NULL: '[ERROR] 필수로 입력해주세요.\n',
  ONLY_NUMBER: '[ERROR] 숫자만 입력해주세요.\n',
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.\n',
  DIVISIBLE: '[ERROR] 1000원 단위로 입력해주세요.\n',
  NOT_SPACE: '[ERROR] 중간에 띄어쓰기를 빼고 입력해주세요.\n',
  COMMA: '[ERROR] 쉼표의 위치를 다시 확인해주세요.\n',
  SIX_NUMBERS: '[ERROR] 숫자 6개가 입력되었는 지 확인해주세요.\n',
  NOT_DUPLICATE: '[ERROR] 로또 당첨 번호는 중복될 수 없습니다.\n',
  NOT_DUPLICATE_BONUS:
    '[ERROR] 보너스 번호는 당첨 번호와 중복되면 안 됩니다.\n',
});
export default errorMessage;
