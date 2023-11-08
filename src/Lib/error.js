const message = Object.freeze({
  prefix: '[ERROR]',

  /**
   * common message
   */
  invalidInput: '공백 혹은 쉼표가 입력되었습니다.',
  invalidNumberRange: '번호는 1부터 45 사이의 숫자여야 합니다.',

  /**
   * 구매 가격 입력
   */
  underThousand: '1000원 이상의 금액을 입력해주세요.',
  invalidUnit: '1000원 단위로 입력해주세요.',
  invalidPurchase: '구매 가격에 문자열이 포함되어 있습니다. 숫자만 입력해주세요.',

  /**
   * 로또 번호 입력 winningNumbers
   */
  invalidNumberLimit: '로또 번호는 6개여야 합니다.',
  duplicateNumber: '중복된 숫자가 있습니다. 6개의 서로 다른 숫자를 입력해주세요.',
  noZero: '앞자리에 0은 허용되지 않습니다. (예. 01, 02 등)',

  /**
   * 보너스 번호 입력 bonusNumber
   */
  invalidBonusNumberLimit: '1개의 보너스 번호를 입력해주세요.',
  duplicateBonusNumber: '보너스 번호가 당첨 번호와 중복됩니다. 다른 번호를 입력해주세요.',
});

const ERROR = Object.freeze({ message });

export default ERROR;
