const errorMessage = Object.freeze({
  NOT_NULL: '[ERROR] 필수로 입력해주세요.',
  ONLY_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  OUT_OF_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자입니다.',

  MONEY: {
    DIVISIBLE: '[ERROR] 1000원 단위로 입력해주세요.',
  },

  WINNING: {
    NOT_SPACE: '[ERROR] 중간에 띄어쓰기를 빼고 입력해주세요.',
    COMMA: '[ERROR] 쉼표의 위치를 다시 확인해주세요.',
    SIX_NUMBERS: '[ERROR] 숫자 6개가 입력되었는 지 확인해주세요.',
  },
});
export default errorMessage;
