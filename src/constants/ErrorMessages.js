const ERROR_MESSAGES = Object.freeze({
  invalidPurchaseAmount: '[ERROR] 구매금액은 1000원 이상의 숫자여야 합니다.',
  notMultipleOfThousand:
    '[ERROR] 구매금액은 1000원으로 나누어 떨어져야 합니다.',
  invalidLottoNumberRange:
    '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  incorrectLottoLength: '[ERROR] 로또 번호는 6개여야 합니다.',
  duplicatedLottoNumber: '[ERROR] 중복된 로또 번호는 입력할 수 없습니다.',
  invalidBonusNumber:
    '[ERROR] 보너스 번호는 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  duplicatedBonusNumber:
    '[ERROR] 보너스 번호는 로또 번호와 겹치지 않아야 합니다.',
});

export default ERROR_MESSAGES;
