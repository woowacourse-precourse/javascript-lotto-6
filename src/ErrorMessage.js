const ERROR_MESSAGE = Object.freeze({
  nonNumeric: '[Error] 숫자만 입력해주세요!',
  invalidAmount: '[Error] 1,000원 단위로 입력해주세요!',
  invalidListSize: '[Error] 로또 번호는 6개여야 합니다!',
  outOfRange: '[Error] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  nonNumericInList: '[Error] 숫자가 아닌 문자열이 포함되어 있습니다!',
  duplicateNumber: '[Error] 중복된 번호가 포함되어 있습니다!',
  duplicateWinningNumber:
    '[Error] 당첨 번호와 겹치지 않는 번호를 입력해주세요!',
});

export default ERROR_MESSAGE;
