const ERROR_MESSAGE = Object.freeze({
  nonNumeric: '[ERROR] 숫자만 입력해주세요!',
  invalidAmount: '[ERROR] 1,000원 단위로 입력해주세요!',
  invalidListSize: '[ERROR] 로또 번호는 6개여야 합니다!',
  outOfRange: '[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.',
  duplicateNumber: '[ERROR] 중복된 번호가 포함되어 있습니다!',
  duplicateWinningNumber:
    '[ERROR] 당첨 번호와 겹치지 않는 번호를 입력해주세요!',
});

export default ERROR_MESSAGE;
